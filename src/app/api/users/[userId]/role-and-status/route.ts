import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { role } = await request.json();
    const updatedUser = await prisma.user.update({
      where: { id: params.userId },
      data: {
        role,
        status: "ACTIVE",
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user role and status:", error);
    return NextResponse.json(
      { error: "Failed to update user role and status" },
      { status: 500 }
    );
  }
}
