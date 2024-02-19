"use server";
import prisma from "@/lib/prisma";
import { ICreateUser } from "@/types/createuser/createuser.type";
import { NextRequest, NextResponse } from "next/server";
import { CheckZipCodeSSR } from "./CheckZipCodeSSR";
import bcrypt from "bcrypt";

export async function POST(req: Request, res: NextResponse) {
  try {
    const res: ICreateUser = await req.json();

    if (res) {
      const dataCep = await CheckZipCodeSSR(res.cep);
      const hashPassword = await bcrypt.hash(res.password, 10);
      const response = await prisma.user.create({
        data: {
          name: res.name,
          email: res.email,
          password: hashPassword,
          whatsapp: res.whatsapp,
          cep: res.cep,
          logradouro: dataCep.logradouro,
          bairro: dataCep.bairro,
          numero: res.numero,
          cidade: dataCep.localidade,
          estado: dataCep.uf,
        },
      });
      return Response.json(res);
    }
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
