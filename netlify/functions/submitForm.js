const boardId = process.env.MONDAY_BOARD_ID;
const apiKey = process.env.MONDAY_API_KEY;

exports.handler = async function (event) {
  if (event.httpMethod !== `POST`) {
    return {
      statusCode: 405,
      body: `Method Not Allowed`,
    };
  }

  const fetch = (...args) =>
    import(`node-fetch`).then(({ default: fetch }) => fetch(...args));

  try {
    // Check environment variables
    if (!boardId || !apiKey) {
      console.error(`Missing environment variables`);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Server misconfiguration (env vars)` }),
      };
    }

    const body = JSON.parse(event.body);
    console.log(`Parsed form data:`, body);

    const { fullName, firstName, lastName, email, phone, message, interest } =
      body;

    if (!fullName || !email || !message) {
      console.error(`Missing required fields in body`);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Missing required fields` }),
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
    console.log(`Monday.com API response:`, data);

    if (data.errors) {
      console.error(`Monday.com returned errors:`, data.errors);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: data.errors }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, item: data.data.create_item }),
    };
  } catch (error) {
    console.error(`Function error:`, error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
