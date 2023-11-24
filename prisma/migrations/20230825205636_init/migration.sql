/*
  Warnings:

  - You are about to drop the column `user` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Trip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATETIME,
    "end_date" DATETIME,
    CONSTRAINT "Trip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Trip" ("end_date", "id", "name", "start_date") SELECT "end_date", "id", "name", "start_date" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
