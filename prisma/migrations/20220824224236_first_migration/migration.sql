-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "release" TEXT NOT NULL,
    "runtime" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorites" (
    "id" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "genres" ADD CONSTRAINT "genres_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
