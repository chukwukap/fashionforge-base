import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [{ clientId: userId }, { designerId: userId }],
    },
    include: { client: true, designer: true },
  });

  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const data = await request.json();
  const project = await prisma.project.create({
    data,
    include: { client: true, designer: true },
  });
  return NextResponse.json(project);
}
