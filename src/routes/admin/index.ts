import { Router } from "express";
import { getGeneralInfoPage } from "../../controller/adminPanel";
import { loginController , getLoginPage} from "../../controller/admin/auth";

const adminRouter = Router();

adminRouter.get('/', getLoginPage);
adminRouter.post('/login', loginController);
adminRouter.get('/generalInfo', getGeneralInfoPage)


export default adminRouter;