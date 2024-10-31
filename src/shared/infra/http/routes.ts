import { Router } from "express";
import {scheduleRoute} from "../../../modules/schedules/infra/routes/schedules.route";


const routes = Router()

routes.use("/schedules", scheduleRoute )