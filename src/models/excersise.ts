import { Schema, Document, model } from "mongoose";

// Refer: https://mongoosejs.com/docs/typescript/statics.html

export interface IExcercise extends Document {
  exerciseName: string;
  exerciseLength: number;
}

export const ExerciseSchema = new Schema<IExcercise>({
  exerciseName: {
    type: String,
    required: true,
  },
  exerciseLength: {
    type: Number,
    required: true,
  },
});

export const Exercise = model<IExcercise>("Exercise", ExerciseSchema);
