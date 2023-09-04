// ListarPacienteController.ts
import { Request, Response } from "express";
import {ListarConsultaPacienteService} from "../../services/Paciente/ListarSolicitacaopPacienteService";


class ListarConsultaPacienteController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    
    const consultasService = new ListarConsultaPacienteService()
    const consulta = await consultasService.execute()

    return res.json(consulta)
  }
}

export { ListarConsultaPacienteController };
