import { Router, Request, Response } from "express";
import { CartController } from "../controllers/cart-controller";

const router: Router = Router();
const cartController = new CartController();

router.post("/", cartController.getCart);
router.get("/", cartController.postCart);

export default router;
