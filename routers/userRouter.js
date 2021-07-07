import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  getChangePassword,
  postChangePassword,
  startGithubLogin,
  callbackGithubLogin,
} from "../controllers/userController";
import {
  onlyPrivate,
  onlyPublic,
  uploadAvatar,
} from "../middleware";

const userRouter = express.Router();

userRouter
  .route(routes.editProfile)
  .all(onlyPrivate)
  .get(getEditProfile)
  .post(uploadAvatar, postEditProfile);

userRouter
  .route(routes.changePassword)
  .all(onlyPrivate)
  .get(getChangePassword)
  .post(postChangePassword);

userRouter.route(routes.userDetail()).get(userDetail);

userRouter.get(
  "/github/start",
  onlyPublic,
  startGithubLogin,
);
userRouter.get(
  "/github/callback",
  onlyPublic,
  callbackGithubLogin,
);

export default userRouter;
