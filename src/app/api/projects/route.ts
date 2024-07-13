import { NextResponse } from "next/server";
import { ethers } from "ethers";
import type { NextRequest } from "next/server";

const contractABI = [
  /* Your contract ABI */
] as const;

const contractAddress = "0x4200000000000000000000000000000000000069";

if (!contractAddress) {
  throw new Error("CONTRACT_ADDRESS is not defined in environment variables");
}

export async function POST(request: NextRequest) {
  const { address } = await request.json();

  if (!address || typeof address !== "string") {
    return NextResponse.json({ error: "Invalid address" }, { status: 400 });
  }

  // TODO: Implement proper authentication check here
  // For now, we'll assume the request is authenticated

  try {
    const rpcUrl = process.env.RPC_URL;
    const adminPrivateKey = process.env.ADMIN_PRIVATE_KEY;

    if (!rpcUrl || !adminPrivateKey) {
      throw new Error(
        "RPC_URL or ADMIN_PRIVATE_KEY is not defined in environment variables"
      );
    }

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const adminWallet = new ethers.Wallet(adminPrivateKey, provider);
    const contract = new ethers.Contract(
      contractAddress!,
      contractABI,
      adminWallet
    );

    const roleBytes32 = ethers.id("DESIGNER_ROLE");
    const tx = await contract.assignRole(address, roleBytes32);
    await tx.wait();

    // Update designer status in your database
    await updateDesignerStatusInDatabase(address, "verified");

    return NextResponse.json({
      success: true,
      message: "Designer verified successfully",
    });
  } catch (error) {
    console.error("Error verifying designer:", error);
    return NextResponse.json(
      { error: "Failed to verify designer" },
      { status: 500 }
    );
  }
}

async function updateDesignerStatusInDatabase(
  address: string,
  status: string
): Promise<void> {
  // Implement this function to update the designer status in your database
  // For now, we'll just log the update
  console.log(`Updating designer ${address} status to ${status}`);
}
