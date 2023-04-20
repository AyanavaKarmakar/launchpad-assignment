import { Router } from "express";
import { createExercise, deleteExercise } from "../controllers/exercise";

const router = Router();

router.post("/exercise", createExercise);
router.delete("/exercise/:id", deleteExercise);

export const exerciseRoutes = router;
