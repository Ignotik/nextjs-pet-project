import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("API working");
});

app.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});
