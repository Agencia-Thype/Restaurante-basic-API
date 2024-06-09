/*
  Warnings:

  - You are about to drop the column `addressId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `comboId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the `CombosItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `deliveryAddress` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `instructions` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `menuItemId` on table `OrderItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CombosItem" DROP CONSTRAINT "CombosItem_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_addressId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_menuItemId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "addressId",
ADD COLUMN     "deliveryAddress" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "comboId",
ALTER COLUMN "instructions" SET NOT NULL,
ALTER COLUMN "menuItemId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isAdmin" DROP DEFAULT;

-- DropTable
DROP TABLE "CombosItem";

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
