"use server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWTTOKEN = process.env.JWT_SECRET || "euamojesus102030";

export async function POST(req: NextRequest) {
  return req
    .json()
    .then((data) => {
      console.log("🚀 ~ POST ~ data:", data);
      if (data) {
        return prisma.user
          .findUnique({
            where: { email: data.email },
          })
          .then((consultar) => {
            if (!consultar) {
              return new NextResponse(
                JSON.stringify({ message: "usuario não existe" }),
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  status: 400,
                }
              );
            } else {
              return bcrypt
                .compare(data.password, consultar.password)
                .then((decode) => {
                  console.log("🚀 ~ POST ~ decode:", decode);
                  if (!decode) {
                    return new NextResponse(
                      JSON.stringify({
                        message: "Usuario ou senha incorretos route",
                      }),
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                        status: 401,
                      }
                    );
                  } else {
                    const token = jwt.sign(
                      {
                        id: consultar.id,
                        name: consultar.name,
                        email: consultar.email,
                        whatsapp: consultar.whatsapp,
                      },
                      JWTTOKEN,
                      {
                        expiresIn: "1d",
                        algorithm: "HS256",
                      }
                    );

                    return new Promise((resolve) =>
                      setTimeout(resolve, 5000)
                    ).then(() => {
                      return new NextResponse(
                        JSON.stringify({ token: token }),
                        {
                          status: 200,
                          headers: { "Content-Type": "application/json" },
                        }
                      );
                    });
                  }
                });
            }
          });
      }
    })
    .catch((error) => {
      console.error(`Error processing POST request: ${error}`);
      return new NextResponse(
        JSON.stringify({ message: "Internal Server Error" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 500,
        }
      );
    });
}
