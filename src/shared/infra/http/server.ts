import express from "express";
import serverless from "serverless-http";
// import { buscarAgendas } from "./agenda/controller/agendaController";
// import { marcarAgendamento } from "./agendamento/controller/agendamentoController";

const app = express();
app.use(express.json());

// Endpoint: Buscar agendas e horários dos médicos
// app.get("/agendas", async (req: Request, res: Response) => {
//   try {
//     const result = await buscarAgendas(req, res);
//     res.status(result.statusCode).json(JSON.parse(result.body));
//   } catch (error) {
//     res.status(500).json({ mensagem: "Erro ao buscar agendas", erro: error });
//   }
// });

// Endpoint: Marcar agendamento do paciente
// app.post("/agendamento", async (req: Request, res: Response) => {
//   try {
//     const result = await marcarAgendamento({
//       ...req,
//       body: JSON.stringify(req.body)
//     } as any);
//     res.status(result.statusCode).json(JSON.parse(result.body));
//   } catch (error) {
//     res.status(500).json({ mensagem: "Erro ao marcar agendamento", erro: error });
//   }
// });

export const handler = serverless(app);