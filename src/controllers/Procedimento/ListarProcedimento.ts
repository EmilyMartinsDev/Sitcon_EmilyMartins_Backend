// ListarProcedimentosController.ts

import { Request, Response } from 'express';
import { ListarProcedimentosService } from '../../services/Procedimento/ListarProcedimento';

class ListarProcedimentosController {
  async handle(req: Request, res: Response) {
    try {
      const { profissionalId, solicitacaoId } = req.params;

      const listarProcedimentosService = new ListarProcedimentosService();

      const procedimentos = await listarProcedimentosService.execute(
        parseInt(profissionalId),
        parseInt(solicitacaoId),
      );

      return res.json(procedimentos);
    } catch (error) {
      return res.status(500);
    }
  }
}

export { ListarProcedimentosController };
