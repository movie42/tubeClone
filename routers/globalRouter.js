import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  home,
  getLogin,
  postLogin,
  getJoin,
  postJoin,
} from "../controllers/globalController";
import { onlyPrivate, onlyPublic } from "../middleware";
import {
  postGithubLogin,
  logout,
  githubLogin,
  getMe,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.route(routes.home).get(home);

//login
globalRouter
  .route(routes.login)
  .get(onlyPublic, getLogin)
  .post(onlyPublic, postLogin);

globalRouter.route(routes.logout).get(onlyPrivate, logout);

//join
globalRouter
  .route(routes.join)
  .get(onlyPublic, getJoin)
  .post(onlyPublic, postJoin, postLogin);

globalRouter.route(routes.github).get(githubLogin);

globalRouter
  .route(routes.githubCallback)
  .get(
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogin
  );

globalRouter.route(routes.me).get(getMe);
export default globalRouter;
