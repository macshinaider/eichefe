import prisma from "@/lib/prisma";
import axios from "axios";

async function SendMsg(  
  msg: string,
  number: string,
  iduser: string
) {
  let data = JSON.stringify({
    number: number,
    options: {
      delay: 2000,
      presence: "composing",
      linkPreview: false,
    },
    textMessage: {
      text: msg,
    },
  });

  const user = await prisma.instance.findUnique({
    where: {
      id: Number(iduser),
    },
  });


  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `http://localhost:8080/message/sendText/${user!.name}`,
    headers: {
      "Content-Type": "application/json",
      apikey: "euamojesus102030",
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
