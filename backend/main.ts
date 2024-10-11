import dotenv from "dotenv";
import express, { Request, Response } from "express";
import routes from "./routes/index";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import errorHandler from "./middleware/ErrorHandlingMiddleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload middleware
app.use(fileUpload({}));

// Routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

app.get("/", (_req: Request, res: Response) => {
  res.send("API working");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
