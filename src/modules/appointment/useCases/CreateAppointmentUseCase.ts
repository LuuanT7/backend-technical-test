import { ICreateAppointmentDTO } from '../dtos/ICreateAppointmentDTO';
import { AppointmentMockRepository } from '../repositories/AppointmentMockRepository';

export class CreateAppointmentUseCase {
  private appointmentRepository = new AppointmentMockRepository();

  public async createAppoitment({doctor_id, patients_name, scheduled_time}: ICreateAppointmentDTO) {
    return  await this.appointmentRepository.createAppointment({doctor_id, patients_name, scheduled_time});
  }
}