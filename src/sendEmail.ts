export const sendEmail = async (formData: any): Promise<boolean> => {
  try {
    const response = await fetch("http://s2-s-creations-dkp-3cpm.vercel.app:3001/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return response.ok;
  } catch (error) {
    console.error("❌ sendEmail error:", error);
    return false;
  }
};