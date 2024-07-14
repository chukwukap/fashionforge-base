import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const collections = await prisma.collection.findMany({
    include: { designer: true, designs: true },
  });
  return NextResponse.json(collections);
}

export async function POST(request: Request) {
  const data = await request.json();
  const collection = await prisma.collection.create({
    data,
    include: { designer: true, designs: true },
  });
  return NextResponse.json(collection);
}
