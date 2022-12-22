-- CreateTable
CREATE TABLE "Children" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "familyId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "relativeAge" INTEGER,
    CONSTRAINT "Children_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Family" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
