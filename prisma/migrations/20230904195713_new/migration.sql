/*
  Warnings:

  - You are about to drop the column `clinicaSolicitacao_id` on the `Procedimento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Procedimento" DROP CONSTRAINT "Procedimento_clinicaSolicitacao_id_fkey";

-- AlterTable
ALTER TABLE "Procedimento" DROP COLUMN "clinicaSolicitacao_id";

-- CreateTable
CREATE TABLE "_ProcedimentoClinicaSolicitacao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProcedimentoClinicaSolicitacao_AB_unique" ON "_ProcedimentoClinicaSolicitacao"("A", "B");

-- CreateIndex
CREATE INDEX "_ProcedimentoClinicaSolicitacao_B_index" ON "_ProcedimentoClinicaSolicitacao"("B");

-- AddForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" ADD CONSTRAINT "_ProcedimentoClinicaSolicitacao_A_fkey" FOREIGN KEY ("A") REFERENCES "ClinicaSolicitacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" ADD CONSTRAINT "_ProcedimentoClinicaSolicitacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Procedimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
