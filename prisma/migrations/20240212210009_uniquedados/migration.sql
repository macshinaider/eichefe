/*
  Warnings:

  - A unique constraint covering the columns `[whatsapp]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_whatsapp_key" ON "User"("whatsapp");
