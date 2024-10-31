import { scheduleMockRepository } from "../repositories/ScheduleMockRepository";

export class ScheduleService {
  private scheduleRepository = new scheduleMockRepository();

  public async getSchedules() {
    return  await this.scheduleRepository.getSchedules();
  }
}