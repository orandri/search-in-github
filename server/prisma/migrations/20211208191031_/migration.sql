/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[node_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "username",
ADD COLUMN     "events_url" TEXT,
ADD COLUMN     "followers_url" TEXT,
ADD COLUMN     "following_url" TEXT,
ADD COLUMN     "gists_url" TEXT,
ADD COLUMN     "gravatar_id" TEXT,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "node_id" TEXT NOT NULL,
ADD COLUMN     "organizations_url" TEXT,
ADD COLUMN     "received_events_url" TEXT,
ADD COLUMN     "repos_url" TEXT,
ADD COLUMN     "site_admin" BOOLEAN,
ADD COLUMN     "starred_url" TEXT,
ADD COLUMN     "subscriptions_url" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "url" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "html_url" DROP NOT NULL,
ALTER COLUMN "public_repos" DROP NOT NULL,
ALTER COLUMN "public_gists" DROP NOT NULL,
ALTER COLUMN "followers" DROP NOT NULL,
ALTER COLUMN "following" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
