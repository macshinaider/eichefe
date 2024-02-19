export async function TemZap(whats: string) {
  try {
    const data = {
      numbers: [whats],
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "euamodeus",
      },
      body: JSON.stringify(data),
    };
    const verificar = await fetch(
      `http://localhost:8080/chat/whatsappNumbers/eichefe`,
      options
    );
    

    if (verificar.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
