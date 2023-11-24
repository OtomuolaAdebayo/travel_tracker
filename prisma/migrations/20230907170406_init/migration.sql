/*
  Warnings:

  - You are about to alter the column `trip` on the `Expenses` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trip" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" INTEGER NOT NULL
);
INSERT INTO "new_Expenses" ("amount", "currency", "id", "name", "trip") SELECT "amount", "currency", "id", "name", "trip" FROM "Expenses";
DROP TABLE "Expenses";
ALTER TABLE "new_Expenses" RENAME TO "Expenses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
