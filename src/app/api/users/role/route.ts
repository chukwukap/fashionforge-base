import { NextResponse } from "next/server";
import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const user = await prisma.user.findUnique({
    where: { privyId: params.userId },
    select: { role: true },
  });

  return NextResponse.json({ hasRole: !!user?.role });
}

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { role } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { privyId: params.userId },
    data: { role: role as UserRole },
  });

  return NextResponse.json(updatedUser);
}
