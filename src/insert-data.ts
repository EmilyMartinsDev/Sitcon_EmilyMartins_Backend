import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertData() {
  try {
    // Inserir pacientes
    // Inserção de pacientes (continuação)
    await prisma.paciente.createMany({
        data: [
          {
            id: 1,
            nome: "Augusto Fernandes",
            dataNasc: new Date("2000-08-10"),
            CPF: "210.298.293-09",
            status: "ativo",
          },
          {
            id: 2,
            nome: "Maria Silva Oliveira",
            dataNasc: new Date("1999-03-21"),
            CPF: "210.298.293-09",
            status: "ativo",
          },
          {
            id: 3,
            nome: "Alfonse Smikchuz",
            dataNasc: new Date("2002-10-02"),
            CPF: "210.298.293-09",
            status: "ativo",
          },
          { id: 4, nome: 'Nagela Perreira', dataNasc: new Date('1997-05-16'), CPF: '210.298.293-09', status: 'ativo' },
          { id: 6, nome: 'João Paulo Ferreira', dataNasc: new Date('1995-06-26'), CPF: '210.298.293-09', status: 'inativo' },
          { id: 5, nome: 'Gustavo Hernanes', dataNasc: new Date('2001-07-10'), CPF: '210.298.293-09', status: 'ativo' },
          { id: 9, nome: 'Zira Silva', dataNasc: new Date('2003-02-14'), CPF: '210.298.293-09', status: 'ativo' },
          { id: 8, nome: 'Helena Marques', dataNasc: new Date('2000-01-11'), CPF: '210.298.293-09', status: 'ativo' },
          { id: 7, nome: 'Julio Costa Martins', dataNasc: new Date('1980-11-23'), CPF: '210.298.293-09', status: 'ativo' },
          { id: 10, nome: 'João Bicalho', dataNasc: new Date('1993-03-12'), CPF: '210.298.293-09', status: 'inativo' },
          { id: 12, nome: 'Carolina Rosa Silva', dataNasc: new Date('2001-12-24'), CPF: '210.298.293-09', status: 'ativo' },
          { id: 11, nome: 'Paulina Araujo', dataNasc: new Date('2002-08-10'), CPF: '210.298.293-09', status: 'ativo' },
        ],
      });
  
      // Inserção de profissionais (continuação)
      await prisma.profissional.createMany({
        data: [
          { id: 1, nome: 'Orlando Nobrega', status: 'ativo' },
          { id: 2, nome: 'Rafaela Tenorio', status: 'ativo' },
          { id: 3, nome: 'João Paulo Nobrega', status: 'ativo' },
        ],
      });
  
      // Inserção de tipos de solicitação (continuação)
      await prisma.tipoSolicitacao.createMany({
        data: [
          { id: 1, descricao: 'Consulta', status: 'ativo' },
          { id: 2, descricao: 'Exames Laboratoriais', status: 'ativo' },
        ],
      });
  
      // Inserção de procedimentos (continuação)
      await prisma.procedimento.createMany({
        data: [
          { id: 1, descricao: 'Consulta Pediátrica', tipo_id: 1, status: 'ativo' },
          { id: 2, descricao: 'Consulta Clínico Geral', tipo_id: 1, status: 'ativo' },
          { id: 3, descricao: 'Hemograma', tipo_id: 2, status: 'ativo' },
          { id: 4, descricao: 'Glicemia', tipo_id: 2, status: 'ativo' },
          { id: 5, descricao: 'Colesterol', tipo_id: 2, status: 'ativo' },
          { id: 6, descricao: 'Triglicerídeos', tipo_id: 2, status: 'ativo' },
        ],
      });
  
      // Inserção de associações de profissionais com procedimentos (continuação)
      await prisma.profissionalAtende.createMany({
        data: [
          { id: 1, procedimento_id: 1, profissional_id: 2, status: 'ativo' },
          { id: 2, procedimento_id: 2, profissional_id: 2, status: 'ativo' },
          { id: 3, procedimento_id: 2, profissional_id: 3, status: 'ativo' },
          { id: 4, procedimento_id: 1, profissional_id: 3, status: 'inativo' },
          { id: 5, procedimento_id: 3, profissional_id: 1, status: 'ativo' },
          { id: 6, procedimento_id: 4, profissional_id: 1, status: 'ativo' },
          { id: 7, procedimento_id: 5, profissional_id: 1, status: 'ativo' },
          { id: 8, procedimento_id: 6, profissional_id: 1, status: 'ativo' },
        ],
      });
  
      console.log('Dados inseridos com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  insertData();
  
