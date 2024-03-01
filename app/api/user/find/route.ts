import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.email) {
    return false;
  }
  if (data.email) {
    const res = await prisma.user.findUnique({
      where: { email: data.email },
    });

    return Response.json({ id: res?.id }, { status: 200 });
  }
}
