import { Router } from "express";
import userRouter from "./userRouter";
import typeFlowerRouter from "./typeFlowerRouter";
import flowerRouter from "./flowerRouter";
import cartRouter from "./cartRouter";
import offerRouter from "./offerRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/type", typeFlowerRouter);
router.use("/flower", flowerRouter);
router.use("/offer", offerRouter);
router.use("/cart", cartRouter);

export default router;
