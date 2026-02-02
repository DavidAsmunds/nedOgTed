import { Router } from "express";
import * as applicationController from "./controllers/applicationController";
import * as meetingController from "./controllers/meetingController";
import * as accountController from "./controllers/accountController";

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
router.patch("/meeting/", meetingController.updateMeeting)

//account
router.post("/register/",accountController.postApplication);
router.get("/account/:id", accountController.getAccountById);

export default router;