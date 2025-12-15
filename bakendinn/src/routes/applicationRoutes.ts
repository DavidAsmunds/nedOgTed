import { Router } from "express";
import { postApplication, getAllApplications, getApplicationById } from "../controllers/applicationController";

const router = Router();

router.post("/", postApplication);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);

export default router;