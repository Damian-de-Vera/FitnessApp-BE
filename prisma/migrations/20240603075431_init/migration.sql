/*
  Warnings:

  - The primary key for the `DailyExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dailyProgramId` on the `DailyExercise` table. All the data in the column will be lost.
  - You are about to drop the column `exerciseId` on the `DailyExercise` table. All the data in the column will be lost.
  - The primary key for the `DailyProgram` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `DailyProgram` table. All the data in the column will be lost.
  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `dailyProgramUUID` to the `DailyExercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exerciseUUID` to the `DailyExercise` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `DailyExercise` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userUUID` to the `DailyProgram` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `DailyProgram` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `Exercise` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "DailyExercise" DROP CONSTRAINT "DailyExercise_dailyProgramId_fkey";

-- DropForeignKey
ALTER TABLE "DailyExercise" DROP CONSTRAINT "DailyExercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "DailyProgram" DROP CONSTRAINT "DailyProgram_userId_fkey";

-- AlterTable
ALTER TABLE "DailyExercise" DROP CONSTRAINT "DailyExercise_pkey",
DROP COLUMN "dailyProgramId",
DROP COLUMN "exerciseId",
ADD COLUMN     "dailyProgramUUID" TEXT NOT NULL,
ADD COLUMN     "exerciseUUID" TEXT NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "DailyExercise_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "DailyProgram" DROP CONSTRAINT "DailyProgram_pkey",
DROP COLUMN "userId",
ADD COLUMN     "userUUID" TEXT NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "DailyProgram_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("uuid");

-- AddForeignKey
ALTER TABLE "DailyProgram" ADD CONSTRAINT "DailyProgram_userUUID_fkey" FOREIGN KEY ("userUUID") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyExercise" ADD CONSTRAINT "DailyExercise_dailyProgramUUID_fkey" FOREIGN KEY ("dailyProgramUUID") REFERENCES "DailyProgram"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyExercise" ADD CONSTRAINT "DailyExercise_exerciseUUID_fkey" FOREIGN KEY ("exerciseUUID") REFERENCES "Exercise"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
