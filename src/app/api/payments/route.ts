import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const echo = searchParams.get("echo");

  return NextResponse.json({ message: echo || "No echo parameter provided" });
}
