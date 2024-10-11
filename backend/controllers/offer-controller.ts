import { Response, Request, NextFunction } from "express";
import { prisma } from "../prisma/prisma-client";
import { ApiError } from "../error/ApiError";

export class OfferController {
  async getFlowersByOffers(req: Request, res: Response, next: NextFunction) {
    try {
      const byOffer = await prisma.flower.findMany({
        where: { offer: req.params.offer },
        take: 4,
      });
      res.json({
        byOffer,
      });
    } catch (error) {
      console.error("Error fetching flowers:", error);
      next(ApiError.BadRequest("Internal server error"));
    }
  }
}
