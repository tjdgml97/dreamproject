interface DreamFormData {
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

export const submitToGoogleForm = async (
  data: DreamFormData
): Promise<boolean> => {
  try {
    const response = await fetch("/.netlify/functions/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Form submission failed");
    }

    console.log("Form submitted successfully:", result);
    return true;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
};
