import prismaClient from "../../prisma";

type cadastroCosulta = {
    paciente_id: number,
    profissional_id: number,
    tipoSolicitacao_id: number,
    procedimentos_ids: number[],
    data: Date,
    horario: string
}


class CadastrarPacienteService{
    async execute({paciente_id, profissional_id,tipoSolicitacao_id,procedimentos_ids,data,horario}:cadastroCosulta){
        let procedimentosConnect;

    if (Array.isArray(procedimentos_ids) && procedimentos_ids.length > 0) {
      procedimentosConnect = procedimentos_ids.map((id) => ({ id }));
    } else {
      procedimentosConnect = [];
    }
        const solicitação = await prismaClient.clinicaSolicitacao.create({
            data: {
              profissional_id: profissional_id,
             paciente_id: paciente_id,

             tipoSolicitacao_id:tipoSolicitacao_id,
        
              data: new Date(data),
              horario,
              status: 'pendente',
            },
            include: {
            
              paciente: {
                select: {
                  CPF: true,
                  dataNasc: true,
                  nome: true,
                },
              },
              profissional: {
                select: {
                  nome: true,
                  id: true,
                },
              },
            },
          });
          const clinicicaSolicitacao_id = solicitação.id
          if (procedimentosConnect.length > 0) {
            const promises = procedimentosConnect.map(async (p) => {
              await prismaClient.clinicaProcedimento.create({
                data: {
                  clinicicaSolicitacao_id: clinicicaSolicitacao_id,
                  procedimento_id: p.id,
                },
              });
            });
      
            await Promise.all(promises);
          }
          return solicitação;
        }
      }
     
      
    
export {CadastrarPacienteService}