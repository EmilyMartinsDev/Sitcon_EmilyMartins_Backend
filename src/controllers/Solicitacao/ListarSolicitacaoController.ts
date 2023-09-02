import { Request, Response } from "express";
import { ListarSolicitacaoService } from "../../services/Solicitacao/ListarSolicitacao";


class ListarSolicitacaoController {
  async handle(req: Request, res: Response) {
 
    const solicitacaoService = new ListarSolicitacaoService()
    const solicitacao = await solicitacaoService.execute()

    return res.json(solicitacao)
  }
}

export { ListarSolicitacaoController };