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

        const solicitação = await prismaClient.clinicaSolicitacao.create({
            data: {
               profissional_id: profissional_id,
               paciente_id: paciente_id,
               tipoSolicitacao_id: tipoSolicitacao_id,
                procedimentos: {
                  connect:  Array.isArray(procedimentos_ids) ? procedimentos_ids.map(id => ({ id })) : [],
                },
                data: new Date(data),
                horario, 
                status: 'pendente', 
              },
              include: {
                procedimentos: true, 
                paciente: {
                    select:{
                        CPF: true,
                        dataNasc: true,
                        nome: true
                    }
                },
                profissional: {
                    select:{
                        nome: true,
                        id: true
                    }
                }
              },
        });

        return solicitação;
    }
}

export {CadastrarPacienteService}