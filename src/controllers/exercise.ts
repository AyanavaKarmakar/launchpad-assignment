import type { Request, Response } from "express";
import { Exercise } from "../models/excersise";

export const createExercise = async (req: Request, res: Response) => {
  // validate request body
  if (!req.body.exerciseName || !req.body.exerciseType) {
    return res
      .status(400)
      .json({ message: "Missing exercise name or exercise type" });
  }

  const exercise = new Exercise({
    exerciseName: req.body.exerciseName,
    exerciseType: req.body.exerciseType,
  });

  await exercise.save();

  res.status(201).json(exercise);
};

export const deleteExercise = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Missing exercise id" });
  }

  const exercise = await Exercise.findByIdAndDelete(req.params.id);

  if (!exercise) {
    return res.status(404).json({ message: "Exercise not found" });
  }

  res.status(200).json(exercise);
};
