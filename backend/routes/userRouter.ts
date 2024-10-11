import { Router } from "express";
import { UserController } from "../controllers/user-controller";
import authMiddleware from "../middleware/authMiddleware";

const router: Router = Router();
const userController = new UserController();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

export default router;
