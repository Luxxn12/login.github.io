/*
  Warnings:

  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MasterRoll` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MasterRoll` DROP FOREIGN KEY `MasterRoll_authorId_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `masterRoleId` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `Admin`;

-- DropTable
DROP TABLE `MasterRoll`;

-- CreateTable
CREATE TABLE `MasterRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_masterRoleId_fkey` FOREIGN KEY (`masterRoleId`) REFERENCES `MasterRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
