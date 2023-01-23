import { Router } from "express";
import { checkApiHealth, postNewStickyNotes, getAllStickyNotes } from "../controllers/controllers.js";
import { validationSchema } from "../middleware/middleware.js";
import sticky_note from "../schema/schema.js";

const router = Router();

router.get('/health', checkApiHealth);
router.post('/reminder', validationSchema(sticky_note, 422), postNewStickyNotes)
router.get('/reminder', getAllStickyNotes)
export default router;