const apiKey = process.env.GIVEBUTTER_API_KEY;

exports.handler = async function (event) {
  if (event.httpMethod !== `POST`) {
    return {
      statusCode: 405,
      body: `Method Not Allowed`,
    };
  }

  try {
    if (!apiKey) {
      console.error(`Missing GIVEBUTTER_API_KEY environment variable`);
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

    const { email } = body;

    if (
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Invalid email address` }),
      };
    }

    // Create (or match) a Givebutter contact tagged "newsletter".
    const response = await fetch(`https://api.givebutter.com/v1/contacts`, {
      method: `POST`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': `application/json`,
        Accept: `application/json`,
      },
      body: JSON.stringify({
        primary_email: email,
        tags: [`newsletter`],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Full detail stays in function logs; client gets a generic message.
      console.error(`Givebutter returned ${response.status}:`, data);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: `Upstream error — please try again` }),
      };
    }

    // The create endpoint returns the contact directly; list endpoints wrap
    // results in `data`. Handle both shapes.
    const contactId = (data && data.id) || (data.data && data.data.id);
    console.log(
      `Newsletter contact created: id=${contactId} status=${response.status} keys=${Object.keys(data || {}).join(`,`)}`,
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(`Function error:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Something went wrong` }),
    };
  }
};
