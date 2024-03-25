"use server";
import prisma from "@/lib/prisma";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL_APIZAP;

export async function SendMsgIntern(msg: string, number: string): Promise<any> {
  try {
    const data = {
      number: "55" + number,
      options: {
        delay: 1200,
        presence: "composing",
        linkPreview: false,
      },
      textMessage: {
        text: msg,
      },
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "euamojesus102030",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      `${url}/message/sendText/eichefe`,
      options
    );
    if (response.status === 201) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}
