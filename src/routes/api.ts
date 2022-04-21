import { Router } from "express";

import * as ApiController from "../controllers/apiController";
import * as EmailController from "../controllers/emailcontroller";

const router = Router();

router.get("/ping", ApiController.list);

router.get("/contato", EmailController.contato);

export default router;
