-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "CPF" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoSolicitacao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "TipoSolicitacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Procedimento" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Procedimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfissionalAtende" (
    "id" SERIAL NOT NULL,
    "procedimento_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "ProfissionalAtende_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicaSolicitacao" (
    "id" SERIAL NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    "profissional_id" INTEGER NOT NULL,
    "tipoSolicitacao_id" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "ClinicaSolicitacao_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "Procedimento" ADD CONSTRAINT "Procedimento_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "TipoSolicitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfissionalAtende" ADD CONSTRAINT "ProfissionalAtende_procedimento_id_fkey" FOREIGN KEY ("procedimento_id") REFERENCES "Procedimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfissionalAtende" ADD CONSTRAINT "ProfissionalAtende_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicaSolicitacao" ADD CONSTRAINT "ClinicaSolicitacao_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicaSolicitacao" ADD CONSTRAINT "ClinicaSolicitacao_profissional_id_fkey" FOREIGN KEY ("profissional_id") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicaSolicitacao" ADD CONSTRAINT "ClinicaSolicitacao_tipoSolicitacao_id_fkey" FOREIGN KEY ("tipoSolicitacao_id") REFERENCES "TipoSolicitacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" ADD CONSTRAINT "_ProcedimentoClinicaSolicitacao_A_fkey" FOREIGN KEY ("A") REFERENCES "ClinicaSolicitacao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProcedimentoClinicaSolicitacao" ADD CONSTRAINT "_ProcedimentoClinicaSolicitacao_B_fkey" FOREIGN KEY ("B") REFERENCES "Procedimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
