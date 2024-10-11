import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user-controller";

const router: Router = Router();
const userController = new UserController();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.check);

export default router;
