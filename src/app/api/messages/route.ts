import { NextResponse } from "next/server";
import { createClientServer } from "@/lib/supabase";

export async function GET(request: Request) {
  const supabase = createClientServer();

  try {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const supabase = createClientServer();

  try {
    const { message, user_id } = await request.json();

    const { data, error } = await supabase
      .from("messages")
      .insert({ content: message, user_id })
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("Error posting message:", error);
    return NextResponse.json(
      { error: "Failed to post message" },
      { status: 500 }
    );
  }
}
