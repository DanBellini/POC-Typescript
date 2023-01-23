import { Router } from "express";
import { checkApiHealth } from "../controllers/controllers";
var router = Router();
router.get('/health', checkApiHealth);
export default router;
