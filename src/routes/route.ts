import { Router } from "express";
import { checkApiHealth } from "../controllers/controllers.js";

const router = Router();

router.get('/health', checkApiHealth)

export default router