import { NextResponse } from "next/server";
import { ethers } from "ethers";

const contractABI = [
  /* Your contract ABI */
];
const contractAddress = process.env.CONTRACT_ADDRESS;

export async function POST(request) {
  const { address } = await request.json();

  // TODO: Implement proper authentication check here
  // For now, we'll assume the request is authenticated

  try {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const adminWallet = new ethers.Wallet(
      process.env.ADMIN_PRIVATE_KEY,
      provider
    );
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      adminWallet
    );

    const roleBytes32 = ethers.utils.id("DESIGNER_ROLE");
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

async function updateDesignerStatusInDatabase(address, status) {
  // Implement this function to update the designer status in your database
}
