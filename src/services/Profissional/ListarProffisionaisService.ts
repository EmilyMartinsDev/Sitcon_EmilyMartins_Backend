import prismaClient from "../../prisma";

class ListarProfissionaisService{
    async execute(){
        
        const profissionais = await prismaClient.profissional.findMany({
            where:{
                status: "ativo"
            }
        });

      
        return profissionais


    }
}
export { ListarProfissionaisService }