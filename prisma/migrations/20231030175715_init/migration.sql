/*
  Warnings:

  - Made the column `description` on table `Expenses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `Trip` required. This step will fail if there are existing NULL values in that column.
  - Made the column `age` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `country` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trip" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Expenses" ("amount", "currency", "description", "id", "name", "trip") SELECT "amount", "currency", "description", "id", "name", "trip" FROM "Expenses";
DROP TABLE "Expenses";
ALTER TABLE "new_Expenses" RENAME TO "Expenses";
CREATE TABLE "new_Trip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" DATETIME,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    CONSTRAINT "Trip_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Trip" ("city", "country", "end_date", "id", "name", "start_date", "userId") SELECT "city", "country", "end_date", "id", "name", "start_date", "userId" FROM "Trip";
DROP TABLE "Trip";
ALTER TABLE "new_Trip" RENAME TO "Trip";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_User" ("age", "country", "id", "name") SELECT "age", "country", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
