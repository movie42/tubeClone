import express from "express";
import routes from "../routes";
import {
  home,
  getLogin,
  postLogin,
  logout,
  getJoin,
  postJoin,
} from "../controllers/globalController";
import { uploadAvatar } from "../middleware";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);

//login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

//join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, uploadAvatar, postJoin);

export default globalRouter;
