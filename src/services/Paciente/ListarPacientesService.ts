// ListarPacienteService.ts
import prismaClient from "../../prisma";

class ListarPacienteService {
  async execute(page: number, pageSize: number) {
    try {
      const skip = (page - 1) * pageSize;
      const pacientes = await prismaClient.paciente.findMany({
        skip,
        take: pageSize,
      });
      return pacientes;
    } catch (error) {
      throw new Error("Erro ao buscar pacientes.");
    }
  }
}

export  {ListarPacienteService};
