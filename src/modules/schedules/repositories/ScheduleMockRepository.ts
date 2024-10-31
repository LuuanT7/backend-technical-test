import { IScheduleDTO } from "../dtos/IScheduleDTO";

export class scheduleMockRepository {
    public async getSchedules() {
      return [
        {
          id: 1,
          name: "Dr. João Silva",
          specialty: "Cardiologista",
          available_times: ["2024-10-05 09:00", "2024-10-05 10:00", "2024-10-05 11:00"],
        },
        {
          id: 2,
          name: "Dra. Maria Souza",
          specialty: "Dermatologista",
          available_times: ["2024-10-06 14:00", "2024-10-06 15:00"],
        },
      ];
    }
  }