import { Response, Request } from "express";

export class UserController {
  async registration(req: Request, res: Response) {
    res.send("Reg successful");
  }
  async login(req: Request, res: Response) {
    res.send("login successful");
  }

  async check(req: Request, res: Response) {
    res.send("Check successful");
  }
}
