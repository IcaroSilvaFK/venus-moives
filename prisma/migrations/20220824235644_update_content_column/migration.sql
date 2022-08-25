/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "country" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
