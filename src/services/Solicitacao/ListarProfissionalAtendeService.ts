import prismaClient from "../../prisma";

class ListarProffisonalAtendeService{
    async execute(profissional_id: number){
        
        const procedimentos = await prismaClient.profissionalAtende.findMany({
            where: {
                profissional_id: profissional_id,
                AND:{
                    status: "ativo"
                }
            }, select:{
                procedimento: true

            }
        });

        

        return procedimentos


    }
}
export { ListarProffisonalAtendeService }