import { Router } from "express";
import authenticateToken from "../../middlewares/authenticate";
import * as userController from "../../controller/user/user"

const userRouter = Router();

userRouter.get('/', userController.getForm);

export default userRouter;