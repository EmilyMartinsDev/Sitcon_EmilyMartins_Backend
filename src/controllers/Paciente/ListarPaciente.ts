// ListarPacienteController.ts
import { Request, Response } from "express";
import {ListarPacienteService} from "../../services/Paciente/ListarPacientesService";


class ListarPacienteController {
  async handle(req: Request, res: Response) {
    try {
      const { page = 1 } = req.query;
      const pageSize = 10;
      const listarPacienteService = new ListarPacienteService();
      const pacientes = await listarPacienteService.execute(
        Number(page),
        pageSize
      );
      return res.json(pacientes);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar pacientes." });
    }
  }
}

export { ListarPacienteController };
