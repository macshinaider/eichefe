"use server"
import { ReactionMsgIdIntern } from "@/components/whatsapp-api-system/react-msg-id-intern";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const remotejid = searchParams.get("remotejid");
  const idmsg = searchParams.get("idmsg");

  if (!remotejid || !idmsg) {
    return Response.json({ message: "Faltando dados" }, { status: 400 });
  }

  try {
    await ReactionMsgIdIntern(remotejid, idmsg, "✅");
    return Response.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
// {"key":{"remoteJid":"5511942042224@s.whatsapp.net","fromMe":true,"id":"BAE5A8DAA8BFAFA2"},"message":{"extendedTextMessage":{"text":"*EiChef* \n Aqui está seu codigo para autenticação em nossa Plataforma \n\n *Codigo*: 509727"}},"messageTimestamp":"1709768640","status":"PENDING"}
