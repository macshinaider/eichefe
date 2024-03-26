import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const user = jwt.decode(body.token)
    if (!user) {
      return Response.json({ message: "nao existe" }, { status: 400 });
    }
    const createInstance = await prisma.instance.create({
        data: {
            
        }
    })

    return Response.json({ message: 'teste' }, { status: 200 });
  } catch (error) {
    return Response.json('error');
  }
}
