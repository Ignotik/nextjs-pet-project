import { Router } from "express";
import { CartController } from "../controllers/cart-controller";
import authMiddleware from "../middleware/authMiddleware";

const router: Router = Router();
const cartController = new CartController();

router.get(
  "/",
  authMiddleware,
  cartController.getOrCreateCart.bind(cartController)
);
router.post(
  "/add",
  authMiddleware,
  cartController.addItemToCart.bind(cartController)
);

export default router;
