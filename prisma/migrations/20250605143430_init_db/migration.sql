-- CreateEnum
CREATE TYPE "TipoUser" AS ENUM ('admin', 'paciente', 'profissional');

-- CreateTable
CREATE TABLE "User" (
    "id_usuario" SERIAL NOT NULL,
    "tipo" "TipoUser" NOT NULL,
    "login" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Adm" (
    "id_admin" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "login" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,

    CONSTRAINT "Adm_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id_paciente" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id_paciente")
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id_profissional" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especialidade" VARCHAR(100) NOT NULL,
    "CRM_COREN" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" VARCHAR(15) NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id_profissional")
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id_notificacao" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "mensagem" TEXT NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id_notificacao")
);

-- CreateTable
CREATE TABLE "Log" (
    "id_log" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "acao" TEXT NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id_log")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id_agenda" SERIAL NOT NULL,
    "id_profissional" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora_inicio" TIME(0) NOT NULL,
    "hora_fim" TIME(0) NOT NULL,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id_agenda")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id_consulta" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora" TIME(0) NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_profissional" INTEGER NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id_consulta")
);

-- CreateTable
CREATE TABLE "Prontuario" (
    "id_prontuario" SERIAL NOT NULL,
    "id_consulta" INTEGER NOT NULL,
    "observacoes" TEXT NOT NULL,
    "receita" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prontuario_pkey" PRIMARY KEY ("id_prontuario")
);

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional"("id_profissional") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id_paciente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_id_profissional_fkey" FOREIGN KEY ("id_profissional") REFERENCES "Profissional"("id_profissional") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prontuario" ADD CONSTRAINT "Prontuario_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Consulta"("id_consulta") ON DELETE RESTRICT ON UPDATE CASCADE;
