/*
  Warnings:

  - You are about to drop the column `productId` on the `Fav` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fav" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "tweetId" INTEGER NOT NULL,
    CONSTRAINT "Fav_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Fav_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Fav" ("createdAt", "id", "tweetId", "updatedAt", "userId") SELECT "createdAt", "id", "tweetId", "updatedAt", "userId" FROM "Fav";
DROP TABLE "Fav";
ALTER TABLE "new_Fav" RENAME TO "Fav";
CREATE INDEX "Fav_userId_idx" ON "Fav"("userId");
CREATE INDEX "Fav_tweetId_idx" ON "Fav"("tweetId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
