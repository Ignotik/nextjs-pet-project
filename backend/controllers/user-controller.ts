import { Response, Request, NextFunction } from "express";
import { ApiError } from "../error/ApiError";
import { prisma } from "../prisma/prisma-client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticatedRequest } from "../middleware/authMiddleware";

const generateJwt = (id: number, email: string) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY as string, {
    expiresIn: "24h",
  });
};

export class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ApiError.BadRequest("Incorrect email or password"));
    }

    const candidate = await prisma.user.findUnique({
      where: { email },
    });
    if (candidate) {
      return next(ApiError.BadRequest("User with this email already exists"));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });
    const token = generateJwt(user.id, user.email);
    return res.json({ token });
  }
  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(ApiError.BadRequest("Incorrect email or password"));
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return next(ApiError.BadRequest("User with this email not found"));
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Incorrect email or password"));
    }
    const token = generateJwt(user.id, user.email);
    return res.json({ token });
  }

  async check(req: AuthenticatedRequest, res: Response) {
    const token = generateJwt(req.user.id, req.user.email);
    return res.json({ token });
  }
}
