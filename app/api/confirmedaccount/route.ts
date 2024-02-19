import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const rec = await req.json();

  if (rec.id) {
    const res = await prisma.user.findUnique({
        where: { id: rec.id }
    })

    if (res) {
        
    }

  }



  

  return Response.json(rec);

  // const account = await prisma.user.findUnique({id})
}
