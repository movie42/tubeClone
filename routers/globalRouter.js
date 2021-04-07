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
const globalRouter = express.Router();

globalRouter.get(routes.home, home);

//login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

//join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
