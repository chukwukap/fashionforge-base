import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const designs = await prisma.design.findMany({
    include: { designer: true, collection: true },
  });
  return NextResponse.json(designs);
}

export async function POST(request: Request) {
  const data = await request.json();
  const design = await prisma.design.create({
    data,
    include: { designer: true, collection: true },
  });
  return NextResponse.json(design);
}
