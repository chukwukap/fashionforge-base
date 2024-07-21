import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.userId },
      select: { status: true },
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ status: user.status });
  } catch (error) {
    console.error("Error checking user status:", error);
    return NextResponse.json(
      { error: "Failed to check user status" },
      { status: 500 }
    );
  }
}
