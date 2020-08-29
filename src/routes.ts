import {Router} from "express"

import budgets from "./modules/budgets"

const router = Router();

budgets(router);

export default router;
