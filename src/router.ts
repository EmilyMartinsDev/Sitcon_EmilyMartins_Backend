import {Response, Request, Router} from 'express'
const router = Router()
import { ListarPacienteController } from './controllers/Paciente/ListarPaciente'
import { CadastrarPacienteConsultaController } from './controllers/Paciente/CadastrarPacienteController'
import { ListarPacienteIDController } from './controllers/Paciente/ListarPacienteIdController'
import { ListarProfissionalAtende } from './controllers/Solicitacao/ListarProffisonalAtendeController'
import { ListarProfissionalController } from './controllers/Profissional/ListarProfissionaisController'
import { ListarSolicitacaoController } from './controllers/Solicitacao/ListarSolicitacaoController'
import { ListarProcedimentosController } from './controllers/Procedimento/ListarProcedimento'
router.post("/consulta", new CadastrarPacienteConsultaController().handle)
router.get("/pacientes", new ListarPacienteController().handle)
router.get("/paciente/:id", new ListarPacienteIDController().handle)
router.get("/profissionalAtende/:profissional_id", new ListarProfissionalAtende().handle)
router.get('/procedimentos/:profissionalId/:solicitacaoId', new ListarProcedimentosController().handle);
router.get("/profissional", new ListarProfissionalController().handle)
router.get("/solicitacao", new ListarSolicitacaoController().handle)
export {router}