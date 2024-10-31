import { Router } from "express";
import { GetSchedulesController } from "../http/GetScheduleController";

const scheduleRoute = Router();

const getSchedulesController = new GetSchedulesController()


scheduleRoute.get('/get', getSchedulesController.getschedules)

export  {scheduleRoute}