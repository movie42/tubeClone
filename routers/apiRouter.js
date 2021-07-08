import express from "express";
import {
  registerView,
  registerComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(
  "/video/:id([0-9a-f]{24})/view",
  registerView,
);
apiRouter.post("/video/:id/comments", registerComment);

export default apiRouter;
