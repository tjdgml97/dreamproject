import { Handler } from "@netlify/functions";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdZqc6_LTBmkPHQHxUOHHh6JGUBVGgN5nAGHUXG8RxVgCyPrw/formResponse";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    const { name, contact, dreamType, dreamContent } = JSON.parse(
      event.body || "{}"
    );

    const formData = new URLSearchParams({
      "entry.1975444667": name,
      "entry.1137706469": contact,
      "entry.1160887175": dreamType,
      "entry.1398418576": dreamContent,
    });

    const response = await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Form");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};

export { handler };
