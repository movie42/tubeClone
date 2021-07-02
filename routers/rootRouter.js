import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, getLogin, postLogin } from "../controllers/globalController";
import { getJoin, postJoin } from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middleware";
import {
  postGithubLogin,
  logout,
  githubLogin,
  getMe,
} from "../controllers/userController";

const rootRouter = express.Router();

//join
rootRouter
  .route(routes.join)
  .get(onlyPublic, getJoin)
  .post(onlyPublic, postJoin, postLogin);

rootRouter.route(routes.home).get(home);

//login
rootRouter
  .route(routes.login)
  .get(onlyPublic, getLogin)
  .post(onlyPublic, postLogin);

rootRouter.route(routes.logout).get(onlyPrivate, logout);

rootRouter.route(routes.github).get(githubLogin);

rootRouter
  .route(routes.githubCallback)
  .get(
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogin
  );

rootRouter.route(routes.me).get(getMe);
export default rootRouter;
