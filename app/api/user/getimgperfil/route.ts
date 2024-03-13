import { whatsapp } from "@/lib/whatsapp";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (!data) {
    return Response.json({ message: "nao existe" }, { status: 400 });
  }

  if (data.token) {
    const descript = jwt.verify(data.token, "euamojesus102030");
    let iduser;
    if (typeof descript === "object" && "id" in descript) {
      iduser = descript.id;
      const response = await prisma.user.findUnique({
        where: { id: iduser },
      });
      return Response.json({ name: response?.name, img: response?.img });
    }
  }
}
