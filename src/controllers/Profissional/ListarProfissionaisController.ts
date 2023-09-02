import { Request, Response } from "express";
import { ListarProfissionaisService } from "../../services/Profissional/ListarProffisionaisService";


class ListarProfissionalController {
  async handle(req: Request, res: Response) {
 
    const proffissionalService = new ListarProfissionaisService()
    const profissionais = await proffissionalService.execute()

    return res.json(profissionais)
  }
}

export { ListarProfissionalController };