import { Router } from "express";
import {
  createProgram,
  deleteProgram,
  updateProgram,
} from "../controllers/program";

const router = Router();

router.post("/programs", createProgram);
router.put("/programs/:id", updateProgram);
router.delete("/programs/:id", deleteProgram);

export const programRoutes = router;
