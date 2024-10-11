import { Response, Request } from "express";

export class CartController {
  async getCart(req: Request, res: Response) {
    res.send("Reg successful");
  }
  async postCart(req: Request, res: Response) {
    res.send("login successful");
  }
}
