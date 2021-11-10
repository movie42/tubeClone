import express from "express";
import {
  registerView,
  registerComment,
  getBoradData,
} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.post("/video/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/video/:id([0-9a-f]{24})/comments", registerComment);
apiRouter.get("/board/:id([0-9a-f]{24})/data", getBoradData);
export default apiRouter;
