/*
  Warnings:

  - Added the required column `authorId` to the `MasterRoll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `MasterRoll` ADD COLUMN `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `MasterRoll` ADD CONSTRAINT `MasterRoll_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
