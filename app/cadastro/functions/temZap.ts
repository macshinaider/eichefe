export async function TemZap(whats: string) {
  try {
    const data = {
      numbers: [whats],
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "euamojesus102030",
      },
      body: JSON.stringify(data),
    };
    const verificar = await fetch(
      `https://apizap.eichef.online/chat/whatsappNumbers/eichefe`,
      options
    );

    if (verificar.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
