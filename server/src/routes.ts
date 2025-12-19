import { Router } from "express";
import * as applicationController from "./controllers/applicationController";
import * as meetingController from "./controllers/meetingController";


const router = Router();

//application
router.post("/application/", applicationController.postApplication);
router.get("/application/", applicationController.getAllApplications);
router.get("/application/:id", applicationController.getApplicationById);

//meetings
router.get("/meeting/", meetingController.getAllMeetings);
router.get("/meeting/:id", meetingController.getMeetingById)


export default router;