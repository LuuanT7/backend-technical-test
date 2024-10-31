import { ICreateAppointmentDTO } from '../dtos/ICreateAppointmentDTO';

export class AppointmentMockRepository {
  public async createAppointment({patients_name, scheduled_time}: ICreateAppointmentDTO) {
    return {
      doctor: "Dr. João Silva",
      patients_name,
      scheduled_time
    }
  }
}