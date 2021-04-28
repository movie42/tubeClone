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

globalRouter.get(routes.home, home);

//login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

//join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.github, githubLogin);

globalRouter.get(routes.me, getMe);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

export default globalRouter;
