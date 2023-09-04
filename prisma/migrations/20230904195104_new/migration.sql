/*
  Warnings:

  - You are about to drop the `_ProcedimentoClinicaSolicitacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" DROP CONSTRAINT "_ProcedimentoClinicaSolicitacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" DROP CONSTRAINT "_ProcedimentoClinicaSolicitacao_B_fkey";

-- AlterTable
ALTER TABLE "Procedimento" ADD COLUMN     "clinicaSolicitacao_id" INTEGER;

-- DropTable
DROP TABLE "_ProcedimentoClinicaSolicitacao";

-- AddForeignKey
ALTER TABLE "Procedimento" ADD CONSTRAINT "Procedimento_clinicaSolicitacao_id_fkey" FOREIGN KEY ("clinicaSolicitacao_id") REFERENCES "ClinicaSolicitacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
