import { Router } from "express";
import CreateAppointmentController from "../http/GetAppointmentController";

const scheduleRoute = Router();

const createAppointmentController = new CreateAppointmentController()


scheduleRoute.get('/get', createAppointmentController.createAppointment)

export  {scheduleRoute}