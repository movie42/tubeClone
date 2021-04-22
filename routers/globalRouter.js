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
import { onlyPublic } from "../middleware";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);

//login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, logout);

//join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

export default globalRouter;
