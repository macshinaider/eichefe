"use server";

import { ReactionMsgIdIntern } from "@/components/whatsapp-api-system/react-msg-id-intern";
import { SendMsgIntern } from "@/components/whatsapp-api-system/sendMsgIntern";
import { delay } from "@/lib/delay";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const code = searchParams.get("code");

  try {
    if (!id) {
      return Response.json({ message: "id nao existe" }, { status: 400 });
    }
    const res = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    const message = `*EiChef*\nAqui está seu codigo para autenticação em nossa Plataforma \n\n*Codigo*: ${code}`;

    const send = await SendMsgIntern(message, res!.whatsapp);
    console.log("🚀 ~ GET ~ send:", send)
    await delay(3000);
    const sendReact = await ReactionMsgIdIntern(send.key.remoteJid, send.key.id, "⏳");
    

    

    return Response.json({ res, send });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
