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
router.post("/meeting/", meetingController.postMeeting)
router.delete("/meeting/:id", meetingController.deleteMeeting)


export default router;