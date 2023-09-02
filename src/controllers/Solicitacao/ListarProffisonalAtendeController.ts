import { Request, Response } from "express";
import { ListarProffisonalAtendeService } from "../../services/Solicitacao/ListarProfissionalAtendeService";


class ListarProfissionalAtende {
  async handle(req: Request, res: Response) {
    const {profissional_id} = req.body
    
    const solicitacoesService = new ListarProffisonalAtendeService()
    const solicitacoes = await solicitacoesService.execute(parseInt(profissional_id))

    return res.json(solicitacoes)
  }
}

export { ListarProfissionalAtende };
