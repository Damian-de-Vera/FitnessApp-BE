/*
  Warnings:

  - Made the column `repetitions` on table `Exercise` required. This step will fail if there are existing NULL values in that column.
  - Made the column `series` on table `Exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Exercise" ALTER COLUMN "repetitions" SET NOT NULL,
ALTER COLUMN "series" SET NOT NULL;
