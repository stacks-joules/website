const baseId = process.env.AIRTABLE_BASE_ID;
const tableId = process.env.AIRTABLE_CONTACT_TABLE_ID;
const apiToken = process.env.AIRTABLE_TOKEN;

// The frontend still sends the Monday-era interest values; map them to the
// Airtable "Interest" single-select option labels.
const INTEREST_MAP = {
  Student: `student`,
  Employer: `industry/hiring`,
  Mentor: `support/volunteer`,
  Other: `other`,
};

// Field length caps: keep junk/abuse out of the Airtable base.
const LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  message: 5000,
  interest: 50,
};

const tooLong = (body) =>
  Object.entries(LIMITS).some(
    ([field, max]) =>
      typeof body[field] === `string` && body[field].length > max,
  );

exports.handler = async function (event) {
  if (event.httpMethod !== `POST`) {
    return {
      statusCode: 405,
      body: `Method Not Allowed`,
    };
  }

  try {
    if (!baseId || !tableId || !apiToken) {
      console.error(`Missing environment variables`);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Server misconfiguration` }),
      };
    }

    const body = JSON.parse(event.body);

    // Honeypot: real users never fill this hidden field.
    if (body[`bot-field`]) {
      // Pretend success so bots don't adapt.
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    const { firstName, lastName, email, message, interest } = body;

    if (!firstName || !lastName || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Missing required fields` }),
      };
    }

    if (tooLong(body) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Invalid field values` }),
      };
    }

    const fields = {
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
      Message: message,
    };
    if (interest && INTEREST_MAP[interest]) {
      // Interest is a Multiple Select field in Airtable — it requires an
      // array of option values, not a bare string.
      fields.Interest = [INTEREST_MAP[interest]];
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableId}`,
      {
        method: `POST`,
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({ fields }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      // Full detail stays in function logs; client gets a generic message.
      console.error(`Airtable returned an error:`, data.error);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: `Upstream error — please try again` }),
      };
    }

    console.log(`Contact form record created:`, data.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, item: data }),
    };
  } catch (error) {
    console.error(`Function error:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Something went wrong` }),
    };
  }
};
