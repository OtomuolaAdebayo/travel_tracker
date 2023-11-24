-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATETIME,
    "end_date" DATETIME
);

-- CreateTable
CREATE TABLE "Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trip" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" INTEGER NOT NULL
);
