import prismaClient from "../../prisma";

class ListarSolicitacaoService{
    async execute(){
        
        const solicitacao = await prismaClient.tipoSolicitacao.findMany({
            where:{
                status: "ativo"
            }
        });

      
        return solicitacao


    }
}
export {ListarSolicitacaoService}