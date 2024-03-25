import axios from "axios";


const url = process.env.NEXT_PUBLIC_URL_APIZAP;

export async function ReactionMsgIdIntern(
  remoteJid: string,
  idmsg: string,
  emoji: string
): Promise<any> {
  let data = JSON.stringify({
    reactionMessage: {
      key: {
        remoteJid: remoteJid,
        fromMe: true,
        id: idmsg,
      },
      reaction: emoji,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${url}/message/sendReaction/eichefe`,
    headers: {
      "Content-Type": "application/json",
      apikey: "euamojesus102030",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}
