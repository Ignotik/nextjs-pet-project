import { Router } from "express";
import { OfferController } from "../controllers/offer-controller";

const router: Router = Router();
const offerController = new OfferController();

router.get("/:offer", offerController.getFlowersByOffers);

export default router;
