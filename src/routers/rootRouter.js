import express from "express";
import routes from "../routes";
import {
  home,
  getLogin,
  postLogin,
  getEditor,
  postEditor,
  getEditorData
} from "../controllers/globalController";
import { getJoin, postJoin } from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../middleware";
import { logout, userDetail } from "../controllers/userController";

const rootRouter = express.Router();

//join
rootRouter
  .route(routes.join)
  .all(onlyPublic)
  .get(getJoin)
  .post(postJoin, postLogin);

rootRouter.route("/test/editor").get(getEditorData);
rootRouter.route(routes.home).get(home);

rootRouter.route("/test").get(getEditor).post(postEditor);

//login
rootRouter
  .route(routes.login)
  .all(onlyPublic)
  .get(getLogin)
  .post(postLogin);

rootRouter.get(routes.logout, onlyPrivate, logout);

rootRouter.route(routes.me).get(userDetail);

export default rootRouter;
