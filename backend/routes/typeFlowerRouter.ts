import { Router, Request, Response } from "express";
import { TypeController } from "../controllers/type-controller";

const router: Router = Router();
const typeController = new TypeController();

router.get("/categories/:type", typeController.getFlowersByCategories);

export default router;
