import { Request, Response } from "express";
import { CadastrarPacienteService } from "../../services/Paciente/CadastrarPacienteService";

class CadastrarPacienteConsultaController{
    async handle(req:Request, res:Response){
        try {
            const {paciente_id, profissional_id,tipoSolicitacao_id,procedimentos_ids,data,horario} = req.body
        const solicitacaoService = new CadastrarPacienteService()
        const solicitação = await solicitacaoService.execute({
            paciente_id, profissional_id,tipoSolicitacao_id,procedimentos_ids,data,horario
        });
        return res.json(solicitação)
          } catch (error) {
            console.error("Erro ao cadastrar paciente:", error);
            return res.status(500).json({ erro: "Ocorreu um erro ao cadastrar o paciente" });
          }
          
       
    }
}


export {CadastrarPacienteConsultaController}