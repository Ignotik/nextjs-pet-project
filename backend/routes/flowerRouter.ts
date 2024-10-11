import { Router } from "express";
import { FlowerController } from "../controllers/flower-controller";

const router: Router = Router();
const flowerController = new FlowerController();

router.post("/", flowerController.create);
router.get("/", flowerController.getAll);
router.get("/:id", flowerController.get);

export default router;
