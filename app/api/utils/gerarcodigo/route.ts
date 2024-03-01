import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
  var codigo = "";
  for (var i = 0; i < 6; i++) {
    codigo += Math.floor(Math.random() * 10);
  }

  return Response.json({codigo: codigo});
}
