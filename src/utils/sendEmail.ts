export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  eventDate?: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return true;
  } catch (error) {
    console.error("❌ sendEmail error:", error);
    return false;
  }
};
