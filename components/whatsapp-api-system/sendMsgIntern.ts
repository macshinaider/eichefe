"use server";
import prisma from "@/lib/prisma";
import axios from "axios";

export async function SendMsgIntern(msg: string, number: string): Promise<any> {
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

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `http://localhost:8080/message/sendText/eichefe`,
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
