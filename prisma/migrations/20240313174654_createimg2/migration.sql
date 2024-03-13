/*
  Warnings:

  - You are about to drop the column `img` on the `Instance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Instance" DROP COLUMN "img";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "img" TEXT DEFAULT 'https://pps.whatsapp.net/v/t61.24694-24/379791944_1391491581496072_557151506134818581_n.jpg?ccb=11-4&oh=01_AdQDSJU7Ys_nPI8VUKSnj3ukWdm0BT-cKobTQV3mjvfpjA&oe=65FED0C6&_nc_sid=e6ed6c&_nc_cat=102';
