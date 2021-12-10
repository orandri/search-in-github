-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "avatar_url" TEXT,
    "html_url" TEXT NOT NULL,
    "bio" TEXT,
    "company" TEXT,
    "blog" TEXT,
    "location" TEXT,
    "email" TEXT,
    "hireable" BOOLEAN,
    "twitter_username" TEXT,
    "public_repos" INTEGER NOT NULL,
    "public_gists" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
