
// ListarPacienteController.ts
import { Request, Response } from "express";
import {ListarPacienteIdService} from "../../services/Paciente/ListarPacienteIdService";


class ListarPacienteIDController {
  async handle(req: Request, res: Response) {
    const {id} = req.params
    
    const pacientID = new ListarPacienteIdService()
    const paciente = await pacientID.execute(parseInt(id))

    return res.json(paciente)
  }
}

export { ListarPacienteIDController };
