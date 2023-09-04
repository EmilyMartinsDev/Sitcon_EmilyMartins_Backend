// ListarProcedimentosService.ts
import prismaClient from "../../prisma";

class ListarProcedimentosConsultaService {
  async execute(clinicicaSolicitacao_id: number) {
    try {
      // Consulta ao banco de dados para obter os procedimentos
      const procedimentos = await prismaClient.clinicaProcedimento.findMany({
        where:{
            clinicicaSolicitacao_id: clinicicaSolicitacao_id
        }, select:{
            procedimento: true,
           
        }
      })
      return procedimentos; 
    } catch (error) {
      throw new Error('Erro ao buscar procedimentos: ');
    }
  }
}

export { ListarProcedimentosConsultaService };
