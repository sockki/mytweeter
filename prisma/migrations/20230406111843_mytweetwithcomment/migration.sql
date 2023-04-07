-- CreateTable
CREATE TABLE "Thatguil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "tweetId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    CONSTRAINT "Thatguil_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Thatguil_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Thatguil_userId_idx" ON "Thatguil"("userId");

-- CreateIndex
CREATE INDEX "Thatguil_tweetId_idx" ON "Thatguil"("tweetId");
