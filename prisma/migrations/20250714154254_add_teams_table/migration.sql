-- CreateTable
CREATE TABLE `Teams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `members` INTEGER NOT NULL DEFAULT 0,
    `member1` VARCHAR(191) NULL,
    `member2` VARCHAR(191) NULL,
    `member3` VARCHAR(191) NULL,
    `member4` VARCHAR(191) NULL,
    `member5` VARCHAR(191) NULL,
    `member6` VARCHAR(191) NULL,
    `member7` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
