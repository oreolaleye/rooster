/*
  Warnings:

  - Changed the type of `day` on the `Availability` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "day",
ADD COLUMN     "day" INTEGER NOT NULL;
