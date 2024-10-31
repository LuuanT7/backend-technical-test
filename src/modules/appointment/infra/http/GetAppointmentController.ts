import { Request, Response } from 'express';
import { CreateAppointmentUseCase } from '../../useCases/CreateAppointmentUseCase';
import { ICreateAppointmentDTO } from '../../dtos/ICreateAppointmentDTO';
import { container } from 'tsyringe';

export default class CreateAppointmentController {
  async createAppointment(req: Request, res: Response): Promise<Response> {
    const {doctor_id, scheduled_time, patients_name} = req.body as ICreateAppointmentDTO
    try {
      const createAppointmentService = container.resolve(CreateAppointmentUseCase)

      const appointment = await createAppointmentService.createAppoitment({
        doctor_id, scheduled_time, patients_name
      });

     return res.json({message: "Agendamento realizado com sucesso", appointment });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar agendas' });
    }
  }
}