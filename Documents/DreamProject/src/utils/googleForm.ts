interface FormData {
  name: string;
  contact: string;
  dreamType: string;
  dreamContent: string;
}

// Google Form의 실제 필드 ID와 매핑
const FORM_ID = "1FAIpQLSdZqc6_LTBmkPHQHxUOHHh6JGUBVGgN5nAGHUXG8RxVgCyPrw";
const FIELD_IDS = {
  name: "entry.1975444667",
  contact: "entry.1137706469",
  dreamType: "entry.1160887175",
  dreamContent: "entry.1398418576",
};

export const submitToGoogleForm = async (data: FormData): Promise<boolean> => {
  try {
    const response = await fetch("/.netlify/functions/submit-to-google-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};
