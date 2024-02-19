import prisma from "@/lib/prisma";

async function gerarCodigo(id: number) {
  const min = 100000;
  const max = 999999;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  const dados = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      code: String(result),
    },
  });

  if (dados) {
    
  }
}
