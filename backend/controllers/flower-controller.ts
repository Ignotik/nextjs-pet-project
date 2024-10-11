import { Response, Request, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { prisma } from "../prisma/prisma-client";
import { ApiError } from "../error/ApiError";
import { UploadedFile } from "express-fileupload";

export class FlowerController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body) {
        return res.status(400).json({ message: "Request body is missing" });
      }

      const { name, price, description, type, offer } = req.body;

      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
      }

      const img = req.files.img as UploadedFile;

      if (!img) {
        return res.status(400).send("Image file is required.");
      }

      const filename = uuidv4() + ".jpg";

      const uploadPath = path.resolve(__dirname, "..", "static", filename);
      await img.mv(uploadPath);

      const newFlower = await prisma.flower.create({
        data: {
          type,
          name,
          price: Number(price),
          description,
          img: filename,
          offer,
        },
      });

      return res.json(newFlower);
    } catch (error: any) {
      return next(ApiError.internal(`Error creating flower: ${error.message}`));
    }
  }

  async getAll(req: Request, res: Response) {
    const flowers = await prisma.flower.findMany();
    const count = await prisma.flower.count();
    res.send({ flowers, count });
  }
  async get(req: Request, res: Response) {
    const flower = await prisma.flower.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(flower);
  }
}
