import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import "dotenv/config";
import { json } from "body-parser";
import cors from "cors";
import { connectDB } from "./db/connect";
import { exerciseRoutes, programRoutes } from "./routes";

const app = express();
app.use(json());
app.use(cors);

// routes
app.use("/api/v1", programRoutes);
app.use("/api/v1", exerciseRoutes);

// handle errors
app.use(
  (err: Error | null, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
      message: "Something went wrong!",
    });
  }
);

// start server
const start = async () => {
  try {
    console.log("Connecting to DB...");
    await connectDB(process.env.MONGODB_URI as string);
    console.log("Connected to DB!");

    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is listening on port ${process.env.PORT || 3000}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
