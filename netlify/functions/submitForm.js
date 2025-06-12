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

    const { fullName, email, phone, message, interest } = body;

    if (!fullName || !email || !message) {
      console.error(`Missing required fields in body`);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Missing required fields` }),
      };
    }

    const query = `
      mutation {
        create_item (
          board_id: ${boardId},
          item_name: "${fullName}",
          column_values: "{\\"email\\": \\"${email}\\", \\"phone\\": \\"${phone}\\", \\"message\\": \\"${message}\\", \\"interest\\": \\"${interest}\\"}"
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
      body: JSON.stringify({ query }),
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
