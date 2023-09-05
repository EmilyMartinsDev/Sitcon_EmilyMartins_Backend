# Projeto 

## Descrição



## Estrutura do Banco de Dados (SQL)


```sql
-- Tabela de Pacientes
CREATE TABLE paciente (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  dataNasc DATETIME NOT NULL,
  CPF VARCHAR(11) NOT NULL,
  status VARCHAR(255) NOT NULL
);

-- Tabela de Profissionais
CREATE TABLE profissional (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL
);

-- Tabela de Tipos de Solicitação
CREATE TABLE tipoSolicitacao (
  id INT PRIMARY KEY AUTO_INCREMENT,
  descricao VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL
);

-- Tabela de Procedimentos
CREATE TABLE procedimento (
  id INT PRIMARY KEY AUTO_INCREMENT,
  descricao VARCHAR(255) NOT NULL,
  tipo_id INT,
  status VARCHAR(255) NOT NULL,
  FOREIGN KEY (tipo_id) REFERENCES tipoSolicitacao(id)
);

-- Tabela de Profissionais Atendem
CREATE TABLE profissionalAtende (
  id INT PRIMARY KEY AUTO_INCREMENT,
  procedimento_id INT NOT NULL,
  profissional_id INT NOT NULL,
  status VARCHAR(255) NOT NULL,
  FOREIGN KEY (procedimento_id) REFERENCES procedimento(id),
  FOREIGN KEY (profissional_id) REFERENCES profissional(id)
);

-- Tabela de Clínica Procedimento
CREATE TABLE ClinicaProcedimento (
  procedimento_id INT,
  clinicicaSolicitacao_id INT,
  PRIMARY KEY (procedimento_id, clinicicaSolicitacao_id),
  FOREIGN KEY (procedimento_id) REFERENCES procedimento(id),
  FOREIGN KEY (clinicicaSolicitacao_id) REFERENCES ClinicaSolicitacao(id)
);

-- Tabela de Clínica Solicitação
CREATE TABLE ClinicaSolicitacao (
  id INT PRIMARY KEY AUTO_INCREMENT,
  paciente_id INT NOT NULL,
  profissional_id INT NOT NULL,
  tipoSolicitacao_id INT NOT NULL,
  data DATETIME NOT NULL,
  horario VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  FOREIGN KEY (paciente_id) REFERENCES paciente(id),
  FOREIGN KEY (profissional_id) REFERENCES profissional(id),
  FOREIGN KEY (tipoSolicitacao_id) REFERENCES tipoSolicitacao(id)
);
# Documentação da API

Esta é a documentação da API para Teste_Sitcon. Esta API fornece endpoints para gerenciar pacientes, profissionais, procedimentos e solicitações clínicas em uma clínica médica. Abaixo estão os detalhes das rotas disponíveis e como usá-las.

## Estrutura da API

A API foi desenvolvida usando Node.js com o framework Express. Ela se comunica com um banco de dados PostgreSQL para armazenar informações relacionadas aos pacientes, profissionais, procedimentos e solicitações clínicas.

## Endpoints Disponíveis

### 1. Cadastrar Paciente na Consulta, ou exame médico

- **Rota**: `POST /consulta`
- **Controlador**: `CadastrarConsultaController`

**Descrição**: Esta rota permite cadastrar uma consulta de retorno ou exame para um paciente. Os seguintes campos são obrigatórios no corpo da solicitação:

- `paciente_id`: ID do paciente.
- `profissional_id`: ID do profissional responsável pela consulta ou exame.
- `tipoSolicitacao_id`: ID do tipo de solicitação (consulta de retorno ou exame).
- `procedimentos_ids`: Uma lista de IDs dos procedimentos associados à consulta ou exame.
- `data`: Data da consulta ou exame.
- `horario`: Horário da consulta ou exame.

Exemplo de requisição POST para cadastrar uma consulta de retorno:

```json
POST /consulta
{
  "paciente_id": 1,
  "profissional_id": 2,
  "tipoSolicitacao_id": 1, // Exemplo: 1 para consulta de retorno, 2 para exame
  "procedimentos_ids": [3, 4], // IDs dos procedimentos associados
  "data": "2023-09-15",
  "horario": "09:00"
}
### 2. Listar Pacientes

- **Rota**: `GET /pacientes`
- **Controlador**: `ListarPacienteController`

**Descrição**: Esta rota retorna a lista de todos os pacientes cadastrados na clínica.

### 3. Listar Paciente por ID

- **Rota**: `GET /paciente/:id`
- **Controlador**: `ListarPacienteIDController`

**Descrição**: Esta rota retorna os detalhes de um paciente com base no ID fornecido como parâmetro na URL.

### 4. Listar Profissional que Atende

- **Rota**: `GET /profissionalAtende/:profissional_id`
- **Controlador**: `ListarProfissionalAtende`

**Descrição**: Esta rota retorna os procedimentos atendidos por um profissional com base no ID do profissional fornecido como parâmetro na URL.

### 5. Listar Procedimentos de uma Consulta

- **Rota**: `GET /procedimentos/:clinicicaSolicitacao_id`
- **Controlador**: `ListarProcedimentosConsultaController`

**Descrição**: Esta rota retorna os procedimentos de uma consulta com base no ID da consulta fornecido como parâmetro na URL.

### 6. Listar Procedimentos por Profissional e Solicitação

- **Rota**: `GET /procedimentos/:profissionalId/:solicitacaoId`
- **Controlador**: `ListarProcedimentosController`

**Descrição**: Esta rota retorna os procedimentos realizados por um profissional em uma solicitação específica com base nos IDs fornecidos como parâmetros na URL.

### 7. Listar Profissionais

- **Rota**: `GET /profissional`
- **Controlador**: `ListarProfissionalController`

**Descrição**: Esta rota retorna a lista de todos os profissionais cadastrados na clínica.

### 8. Listar Solicitações Clínicas

- **Rota**: `GET /solicitacao`
- **Controlador**: `ListarSolicitacaoController`

**Descrição**: Esta rota retorna a lista de todas as solicitações clínicas registradas na clínica.

##9. Listar Consultas da Clínica

- **Rota**: `GET /consulta`
- **Controlador**: `ListarConsultasClinicaController`

**Descrição**: Esta rota retorna a lista de todas as consultas/ procedimentos da clínica.


