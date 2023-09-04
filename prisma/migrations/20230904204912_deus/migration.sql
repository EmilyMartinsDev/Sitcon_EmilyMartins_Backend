/*
  Warnings:

  - You are about to drop the `_ProcedimentoClinicaSolicitacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" DROP CONSTRAINT "_ProcedimentoClinicaSolicitacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" DROP CONSTRAINT "_ProcedimentoClinicaSolicitacao_B_fkey";

-- DropTable
DROP TABLE "_ProcedimentoClinicaSolicitacao";

-- CreateTable
CREATE TABLE "ClinicaProcedimento" (
    "procedimento_id" INTEGER NOT NULL,
    "clinicicaSolicitacao_id" INTEGER NOT NULL,

    CONSTRAINT "ClinicaProcedimento_pkey" PRIMARY KEY ("procedimento_id","clinicicaSolicitacao_id")
);

-- AddForeignKey
ALTER TABLE "ClinicaProcedimento" ADD CONSTRAINT "ClinicaProcedimento_procedimento_id_fkey" FOREIGN KEY ("procedimento_id") REFERENCES "Procedimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicaProcedimento" ADD CONSTRAINT "ClinicaProcedimento_clinicicaSolicitacao_id_fkey" FOREIGN KEY ("clinicicaSolicitacao_id") REFERENCES "ClinicaSolicitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
