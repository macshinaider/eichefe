import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

// const SENHAJWT = process.env.SECRET_JWT || "Lucas102030@";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  

  const signURL = new URL("/login", request.url);
  const dashboardURL = new URL("/dashboard", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }
    return NextResponse.redirect(signURL);
  }

  try {
    const aproved = await verifyAuth(token);    
    if (!aproved) {
      return NextResponse.redirect(signURL);
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return NextResponse.redirect(signURL);
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
