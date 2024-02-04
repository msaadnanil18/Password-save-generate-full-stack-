import { Router } from "express";
import {
  logiUser,
  updatePassword,
  loginUserUpdate,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/api/auth/:userId").get(logiUser);

router.route("/api/login").post(loginUserUpdate);
router.route("/api/password-gen/:userId").post(updatePassword);

export default router;
