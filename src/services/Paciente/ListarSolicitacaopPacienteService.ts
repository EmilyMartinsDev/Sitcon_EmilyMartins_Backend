import prismaClient from "../../prisma";

class ListarConsultaPacienteService{
    async execute(){
        
    const consultas  = await prismaClient.clinicaSolicitacao.findMany(
        {   select: {
            id: true,
            data: true,
            horario: true,
            paciente: {
                select: {
                    nome: true,
                    CPF: true
                }
            },
            tipoSolicitacao: {
                select: { descricao: true}
            },
          
            profissional:{
                select: {
                    nome: true
                }
            }
        },
           
        }
    )


    return consultas


    }
}
export { ListarConsultaPacienteService }