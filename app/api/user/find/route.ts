import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response | void> {
  const data = await req.json();

  if (!data.email) {
    return Response.json({ message: "nao existe" }, { status: 400 });
  }
  if (data.email) {
    const res = await prisma.user.findUnique({
      where: { email: data.email },
    });

    return Response.json({ id: res?.id }, { status: 200 });
  }
}
