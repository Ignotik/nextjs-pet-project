import dotenv from "dotenv";
import cors from "cors";
import express, { Request, Response } from "express";
import routes from "./routes/index";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import errorHandler from "./middleware/ErrorHandlingMiddleware";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload({}));
app.use(express.static(path.join(__dirname, "static")));

app.use("/api", routes);

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
