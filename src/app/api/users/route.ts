import { NextResponse } from "next/server";
import { ethers } from "ethers";

const contractABI = [
  /* Your contract ABI */
];
const contractAddress = process.env.CONTRACT_ADDRESS;

export async function POST(request: NextRequest) {
  const { address, userType } = await request.json();

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

    let roleBytes32;
    if (userType === "CLIENT") {
      roleBytes32 = ethers.utils.id("CLIENT_ROLE");
      // Assign CLIENT role immediately
      const tx = await contract.assignRole(address, roleBytes32);
      await tx.wait();
    } else if (userType === "DESIGNER") {
      // For designers, we'll just store their preference and verify later
      await storeDesignerApplication(address);
    } else {
      return NextResponse.json({ error: "Invalid user type" }, { status: 400 });
    }

    // Update user type in your database
    await updateUserTypeInDatabase(address, userType);

    return NextResponse.json({
      success: true,
      message: "User type set successfully",
    });
  } catch (error) {
    console.error("Error setting user type:", error);
    return NextResponse.json(
      { error: "Failed to set user type" },
      { status: 500 }
    );
  }
}

async function storeDesignerApplication(address) {
  // Implement this function to store the designer application for later verification
  // This could be a database entry, a notification to admins, etc.
}

async function updateUserTypeInDatabase(address, userType) {
  // Implement this function to update the user type in your database
}
