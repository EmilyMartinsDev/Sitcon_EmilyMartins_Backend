// ListarProcedimentosService.ts
import prismaClient from "../../prisma";

class ListarProcedimentosService {
  async execute(profissionalId: number, solicitacaoId: number) {
    try {
      // Consulta ao banco de dados para obter os procedimentos
      const procedimentos = await prismaClient.procedimento.findMany({
        where: {
          tipo_id: solicitacaoId,
          profissionaisAtendem: {
            some: {
              profissional_id: profissionalId,
            },
          },
        },
      });

      return procedimentos; 
    } catch (error) {
      throw new Error('Erro ao buscar procedimentos: ');
    }
  }
}

export { ListarProcedimentosService };
