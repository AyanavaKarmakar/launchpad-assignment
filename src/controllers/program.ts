import type { Request, Response } from "express";
import { Program } from "../models/program";

export const createProgram = async (req: Request, res: Response) => {
  // validate request body
  if (!req.body.programName || !req.body.exercises) {
    return res
      .status(400)
      .json({ message: "Missing program name or exercises" });
  }

  const program = new Program({
    programName: req.body.programName,
    exercises: req.body.exercises,
  });

  await program.save();

  res.status(201).json(program);
};

export const updateProgram = async (req: Request, res: Response) => {
  // validate request body
  if (!req.body.programName || !req.body.exercises) {
    return res
      .status(400)
      .json({ message: "Missing program name or exercises" });
  }

  if (!req.params.id) {
    return res.status(400).json({ message: "Missing program id" });
  }

  const program = await Program.findByIdAndUpdate(
    req.params.id,
    {
      programName: req.body.programName,
      exercises: req.body.exercises,
    },
    { new: true }
  );

  if (!program) {
    return res.status(404).json({ message: "Program not found" });
  }

  res.status(200).json(program);
};

export const deleteProgram = async (req: Request, res: Response) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Missing program id" });
  }

  const program = await Program.findByIdAndDelete(req.params.id);

  if (!program) {
    return res.status(404).json({ message: "Program not found" });
  }

  res.status(200).json(program);
};
