// ListarProcedimentosController.ts

import { Request, Response } from 'express';
import { ListarProcedimentosConsultaService } from '../../services/Procedimento/ListarProcedimentoConsultaService';

class ListarProcedimentosConsultaController {
  async handle(req: Request, res: Response) {
    try {
      const { clinicicaSolicitacao_id} = req.params;

      const listarProcedimentosService = new ListarProcedimentosConsultaService();

      const procedimentos = await listarProcedimentosService.execute(
        parseInt(clinicicaSolicitacao_id),
      );

      return res.json(procedimentos);
    } catch (error) {
      return res.status(500);
    }
  }
}

export { ListarProcedimentosConsultaController };
