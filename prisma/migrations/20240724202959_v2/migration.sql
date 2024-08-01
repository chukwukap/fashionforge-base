/*
  Warnings:

  - You are about to drop the column `tokenId` on the `Design` table. All the data in the column will be lost.
  - You are about to drop the column `contractAddress` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ContractEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageUrl` to the `Design` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_tokenAddress_fkey";

-- DropIndex
DROP INDEX "Design_tokenId_key";

-- AlterTable
ALTER TABLE "Design" DROP COLUMN "tokenId",
ADD COLUMN     "colorPaletteId" TEXT,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "contractAddress";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
ADD COLUMN     "profileImage" TEXT;

-- DropTable
DROP TABLE "ContractEvent";

-- DropTable
DROP TABLE "Token";

-- DropTable
DROP TABLE "Transaction";

-- DropEnum
DROP TYPE "TransactionStatus";

-- CreateTable
CREATE TABLE "_DesignToFabric" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FabricToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DesignToFabric_AB_unique" ON "_DesignToFabric"("A", "B");

-- CreateIndex
CREATE INDEX "_DesignToFabric_B_index" ON "_DesignToFabric"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FabricToProject_AB_unique" ON "_FabricToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_FabricToProject_B_index" ON "_FabricToProject"("B");

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_colorPaletteId_fkey" FOREIGN KEY ("colorPaletteId") REFERENCES "ColorPalette"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesignToFabric" ADD CONSTRAINT "_DesignToFabric_A_fkey" FOREIGN KEY ("A") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DesignToFabric" ADD CONSTRAINT "_DesignToFabric_B_fkey" FOREIGN KEY ("B") REFERENCES "Fabric"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FabricToProject" ADD CONSTRAINT "_FabricToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Fabric"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FabricToProject" ADD CONSTRAINT "_FabricToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
