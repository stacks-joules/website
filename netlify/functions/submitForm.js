const boardId = process.env.MONDAY_BOARD_ID;
const apiKey = process.env.MONDAY_API_KEY;

// Field length caps: keep junk/abuse out of the Monday board.
const LIMITS = {
  fullName: 200,
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 30,
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
    if (!boardId || !apiKey) {
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

    const { fullName, firstName, lastName, email, phone, message, interest } =
      body;

    if (!fullName || !email || !message) {
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

    const columnValues = JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      message,
      interest,
    });

    const query = `
      mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
    `;

    const response = await fetch(`https://api.monday.com/v2`, {
      method: `POST`,
      headers: {
        Authorization: apiKey,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        query,
        variables: {
          boardId,
          itemName: fullName,
          columnValues,
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      // Full detail stays in function logs; client gets a generic message.
      console.error(`Monday.com returned errors:`, data.errors);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: `Upstream error — please try again` }),
      };
    }

    console.log(`Contact form item created:`, data.data.create_item.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, item: data.data.create_item }),
    };
  } catch (error) {
    console.error(`Function error:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Something went wrong` }),
    };
  }
};
