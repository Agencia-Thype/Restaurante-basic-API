/*
  Warnings:

  - Added the required column `categoryId` to the `CombosItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CombosItem" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CombosItem" ADD CONSTRAINT "CombosItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
