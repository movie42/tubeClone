import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import { onlyPrivate } from "../middleware";

const userRouter = express.Router();

userRouter
  .route(routes.editProfile)
  .get(onlyPrivate, getEditProfile)
  .post(onlyPrivate, postEditProfile);

userRouter
  .route(routes.changePassword)
  .get(onlyPrivate, getChangePassword)
  .post(onlyPrivate, postChangePassword);

userRouter.route(routes.userDetail()).get(onlyPrivate, userDetail);

export default userRouter;
