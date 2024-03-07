"use client"
import { jwtVerify, SignJWT } from "jose";

interface UserJwtPayload {
  userId: number;
  jti: number;
  iat: number;
}

export const getJwtSecretKey = () => {
  const secret = process.env.SECRET_JWT || "euamojesus102030";

  if (!secret || secret.length === 0) {
    throw new Error("the enviroment variable JWT_SECRET_KEY is not set.");
  }

  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey()),
    );
    return verified.payload as unknown as UserJwtPayload;
  } catch (error) {
    return false;
  }
};