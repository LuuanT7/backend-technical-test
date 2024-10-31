import { Request, Response } from 'express';
import { ScheduleService } from '../../useCases/GetScheduleUseCase';

export class GetSchedulesController {
  private scheduleService = new ScheduleService();

  public async getschedules(req: Request, res: Response): Promise<Response> {
    try {
      const agendas = await this.scheduleService.getSchedules();
      return res.json({ medicos: agendas });
    } catch (error) {
     return res.status(500).json({ error: 'Erro ao buscar agendas' });
    }
  }
}