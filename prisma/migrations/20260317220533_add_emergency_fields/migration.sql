/*
  Warnings:

  - The values [APPOINTMENT_DEDUCTION] on the enum `TransactionType` will be removed. If these variants are still used in the database, this will fail.
  - The values [PATIENT,DOCTOR] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `doctorId` on the `Availability` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `Payout` table. All the data in the column will be lost.
  - You are about to drop the column `specialty` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[transactionId]` on the table `CreditTransaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lawyerId` to the `Availability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lawyerId` to the `Payout` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmergencyStatus" AS ENUM ('ACTIVE', 'RESOLVED');

-- CreateEnum
CREATE TYPE "CaseStatus" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DisputeStatus" AS ENUM ('INTAKE', 'ANALYZED', 'NOTICE_GENERATED', 'NOTICE_SENT', 'MEDIATION', 'RESOLVED', 'ESCALATED_INTERN', 'ESCALATED_SENIOR', 'CLOSED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "TransactionType_new" AS ENUM ('CREDIT_PURCHASE', 'CASE_DEDUCTION', 'ADMIN_ADJUSTMENT');
ALTER TABLE "CreditTransaction" ALTER COLUMN "type" TYPE "TransactionType_new" USING ("type"::text::"TransactionType_new");
ALTER TYPE "TransactionType" RENAME TO "TransactionType_old";
ALTER TYPE "TransactionType_new" RENAME TO "TransactionType";
DROP TYPE "TransactionType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('UNASSIGNED', 'CLIENT', 'LAWYER', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'UNASSIGNED';
COMMIT;

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Payout" DROP CONSTRAINT "Payout_doctorId_fkey";

-- DropIndex
DROP INDEX "Availability_doctorId_startTime_idx";

-- DropIndex
DROP INDEX "Payout_doctorId_status_idx";

-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "doctorId",
ADD COLUMN     "lawyerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CreditTransaction" ADD COLUMN     "transactionId" TEXT;

-- AlterTable
ALTER TABLE "Payout" DROP COLUMN "doctorId",
ADD COLUMN     "lawyerId" TEXT NOT NULL,
ADD COLUMN     "paymentId" TEXT,
ADD COLUMN     "razorpayPaymentId" TEXT,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "specialty",
ADD COLUMN     "emergencyEmails" TEXT[],
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "practiceArea" TEXT,
ADD COLUMN     "qualifications" TEXT[],
ALTER COLUMN "credits" SET DEFAULT 0;

-- DropTable
DROP TABLE "Appointment";

-- DropEnum
DROP TYPE "AppointmentStatus";

-- CreateTable
CREATE TABLE "EmergencyAlert" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "status" "EmergencyStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmergencyAlert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalCase" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "CaseStatus" NOT NULL DEFAULT 'SCHEDULED',
    "notes" TEXT,
    "clientDescription" TEXT,
    "clientName" TEXT NOT NULL,
    "clientPhone" TEXT NOT NULL,
    "clientAge" INTEGER NOT NULL,
    "clientGender" TEXT NOT NULL,
    "videoSessionId" TEXT,
    "videoSessionToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalCase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "categoryId" TEXT,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LawFirm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reviews" INTEGER NOT NULL DEFAULT 0,
    "timings" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LawFirm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalAdvice" (
    "id" TEXT NOT NULL,
    "caseId" TEXT NOT NULL,
    "lawyerId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "caseHistory" TEXT,
    "caseSummary" TEXT,
    "legalPoints" TEXT NOT NULL,
    "instructions" TEXT,
    "followUpDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LegalAdvice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "credits" INTEGER NOT NULL,
    "screenshotUrl" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "transactionId" TEXT,
    "paymentMethod" TEXT,
    "packageId" TEXT,
    "isNotified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "processedAt" TIMESTAMP(3),
    "processedBy" TEXT,

    CONSTRAINT "PaymentRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "imageUrl" TEXT,
    "link" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OfflineOffice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lawyerName" TEXT NOT NULL,
    "practiceArea" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "timing" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OfflineOffice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispute" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "complainantName" TEXT NOT NULL,
    "complainantEmail" TEXT NOT NULL,
    "complainantPhone" TEXT NOT NULL,
    "opponentName" TEXT,
    "opponentEmail" TEXT,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aiQuestions" JSONB,
    "aiAnalysis" TEXT,
    "legalNotice" TEXT,
    "settlementDraft" TEXT,
    "meetLink" TEXT,
    "preferredDate" TIMESTAMP(3),
    "preferredTime" TEXT,
    "status" "DisputeStatus" NOT NULL DEFAULT 'INTAKE',
    "userResolved" BOOLEAN NOT NULL DEFAULT false,
    "opponentResolved" BOOLEAN NOT NULL DEFAULT false,
    "internId" TEXT,
    "seniorLawyerId" TEXT,
    "escalationNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dispute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LegalDocument" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "leegalityDocId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LegalDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EmergencyAlert_userId_status_idx" ON "EmergencyAlert"("userId", "status");

-- CreateIndex
CREATE INDEX "LegalCase_status_startTime_idx" ON "LegalCase"("status", "startTime");

-- CreateIndex
CREATE INDEX "LegalCase_lawyerId_startTime_idx" ON "LegalCase"("lawyerId", "startTime");

-- CreateIndex
CREATE UNIQUE INDEX "Blog_slug_key" ON "Blog"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LegalAdvice_caseId_key" ON "LegalAdvice"("caseId");

-- CreateIndex
CREATE INDEX "OfflineOffice_city_idx" ON "OfflineOffice"("city");

-- CreateIndex
CREATE INDEX "OfflineOffice_isActive_idx" ON "OfflineOffice"("isActive");

-- CreateIndex
CREATE INDEX "Dispute_userId_idx" ON "Dispute"("userId");

-- CreateIndex
CREATE INDEX "Dispute_status_idx" ON "Dispute"("status");

-- CreateIndex
CREATE UNIQUE INDEX "LegalDocument_leegalityDocId_key" ON "LegalDocument"("leegalityDocId");

-- CreateIndex
CREATE INDEX "LegalDocument_clerkUserId_idx" ON "LegalDocument"("clerkUserId");

-- CreateIndex
CREATE INDEX "LegalDocument_leegalityDocId_idx" ON "LegalDocument"("leegalityDocId");

-- CreateIndex
CREATE INDEX "Availability_lawyerId_startTime_idx" ON "Availability"("lawyerId", "startTime");

-- CreateIndex
CREATE UNIQUE INDEX "CreditTransaction_transactionId_key" ON "CreditTransaction"("transactionId");

-- CreateIndex
CREATE INDEX "Payout_lawyerId_status_idx" ON "Payout"("lawyerId", "status");

-- AddForeignKey
ALTER TABLE "EmergencyAlert" ADD CONSTRAINT "EmergencyAlert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalCase" ADD CONSTRAINT "LegalCase_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalCase" ADD CONSTRAINT "LegalCase_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_lawyerId_fkey" FOREIGN KEY ("lawyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LegalAdvice" ADD CONSTRAINT "LegalAdvice_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "LegalCase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRequest" ADD CONSTRAINT "PaymentRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispute" ADD CONSTRAINT "Dispute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
