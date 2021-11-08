import express from "express";
import {
  registerView,
  registerComment
} from "../controllers/videoController";
import { getParagraph } from "../controllers/globalController";

const apiRouter = express.Router();

apiRouter.post("/video/:id([0-9a-f]{24})/view", registerView);
apiRouter.post("/video/:id/comments", registerComment);

apiRouter.route("/:id([0-9a-f]{24})/notice-data").get(getParagraph);
export default apiRouter;
