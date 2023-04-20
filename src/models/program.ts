import { Schema, Document, model } from "mongoose";
import { ExerciseSchema, type IExcercise } from "./excersise";

// Refer: https://mongoosejs.com/docs/typescript/statics.html

interface IProgram extends Document {
  programName: string;
  exercises: IExcercise[];
}

const programSchema = new Schema<IProgram>({
  programName: {
    type: String,
    required: true,
  },
  exercises: [ExerciseSchema],
});

export const Program = model<IProgram>("Program", programSchema);
