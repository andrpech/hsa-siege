-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "mass" TEXT NOT NULL,
    "hair_color" TEXT NOT NULL,
    "skin_color" TEXT NOT NULL,
    "eye_color" TEXT NOT NULL,
    "birth_year" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "homeworld" TEXT NOT NULL,
    "films" TEXT[],
    "species" TEXT[],
    "vehicles" TEXT[],
    "starships" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL,
    "edited_at" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

