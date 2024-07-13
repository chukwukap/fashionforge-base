import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(
  "postgresql://postgres.wqrtmlinirkcjmkmsoxb:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
  "supabaseKey"
);

export async function GET(request: NextRequest) {
  // Handle GET requests
  return NextResponse.json({ message: "GET request to payments endpoint" });
}

export async function POST(request: NextRequest) {
  // Handle POST requests
  const body = await request.json();

  // Process payment logic here
  // For example, you might want to create a new payment record in your database

  const { data, error } = await supabase
    .from("payments")
    .insert([{ amount: body.amount, user_id: body.userId, status: "pending" }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Payment processed", data });
}

export async function PUT(request: NextRequest) {
  // Handle PUT requests
  const body = await request.json();

  // Update payment logic here
  // For example, you might want to update the status of a payment

  const { data, error } = await supabase
    .from("payments")
    .update({ status: body.status })
    .eq("id", body.paymentId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Payment updated", data });
}

export async function DELETE(request: NextRequest) {
  // Handle DELETE requests
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Payment ID is required" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("payments").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Payment deleted" });
}
