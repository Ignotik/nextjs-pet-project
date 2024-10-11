import { Response, Request, NextFunction } from "express";
import { prisma } from "../prisma/prisma-client";
import { ApiError } from "../error/ApiError";

export class TypeController {
  async getFlowersByCategories(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const byType = await prisma.flower.findMany({
        where: { type: req.params.type },
        take: 8,
      });
      res.json({
        byType,
      });
    } catch (error) {
      console.error("Error fetching flowers:", error);
      next(ApiError.BadRequest("Internal server error"));
    }
  }
}
