import { Response, Request, NextFunction } from "express";
import { AuthenticatedRequest } from "../middleware/authMiddleware";
import { prisma } from "../prisma/prisma-client";
import { ApiError } from "../error/ApiError";

export class CartController {
  async getOrCreateCart(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) {
    try {
      let cart = await prisma.cart.findFirst({
        where: {
          userId: req.user.id,
        },
        include: {
          items: {
            include: {
              flower: true,
            },
          },
        },
      });

      if (!cart) {
        cart = await prisma.cart.create({
          data: {
            userId: req.user.id,
          },
          include: {
            items: {
              include: {
                flower: true,
              },
            },
          },
        });
      }

      res.json(cart);
    } catch (error) {
      next(ApiError.internal("Failed to retrieve or create cart"));
    }
  }

  async addItemToCart(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) {
    const { flowerId, quantity } = req.body;
    if (!flowerId || !quantity) {
      return next(ApiError.BadRequest("Flower ID and quantity are required"));
    }

    try {
      const flower = await prisma.flower.findUnique({
        where: { id: flowerId },
      });

      if (!flower) {
        return next(ApiError.BadRequest("Flower not found"));
      }

      let cart = await prisma.cart.findFirst({
        where: { userId: req.user.id },
      });
      if (!cart) {
        cart = await prisma.cart.create({
          data: {
            userId: req.user.id,
          },
        });
      }

      const totalPrice = flower.price * quantity;

      const cartItem = await prisma.cartItem.create({
        data: {
          orderId: cart.id,
          flowerId,
          quantity,
          totalPrice,
        },
      });

      res.json(cartItem);
    } catch (error) {
      next(ApiError.internal("Failed to add item to cart"));
    }
  }
}
