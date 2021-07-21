/*
  Warnings:

  - You are about to drop the column `albumId` on the `pictures` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pictures" DROP CONSTRAINT "pictures_albumId_fkey";

-- AlterTable
ALTER TABLE "pictures" DROP COLUMN "albumId";

-- CreateTable
CREATE TABLE "_AlbumToPicture" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToPicture_AB_unique" ON "_AlbumToPicture"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToPicture_B_index" ON "_AlbumToPicture"("B");

-- AddForeignKey
ALTER TABLE "_AlbumToPicture" ADD FOREIGN KEY ("A") REFERENCES "albums"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToPicture" ADD FOREIGN KEY ("B") REFERENCES "pictures"("id") ON DELETE CASCADE ON UPDATE CASCADE;
