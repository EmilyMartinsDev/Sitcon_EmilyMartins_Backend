import prismaClient from "../../prisma";

class ListarPacienteIdService{
    async execute(id: number){
        
        const paciente = await prismaClient.paciente.findFirst({
            where: {
                id: id
            }
        });

        if(!paciente){
            throw new Error("esse paciente não existe")
        }

        return paciente


    }
}
export { ListarPacienteIdService }