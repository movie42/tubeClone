import express from "express";
import routes from "../routes";
import {
  getVideoUploadPage,
  newVideoUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middleware";

const videoRouter = express.Router();

videoRouter.route(routes.videoDetail()).get(videoDetail);

//edit video
videoRouter
  .route(routes.editVideo())
  .all(onlyPrivate)
  .get(getEditVideo)
  .post(postEditVideo);

videoRouter
  .route(routes.deleteVideo())
  .get(onlyPrivate, deleteVideo);

// video upload
videoRouter
  .route(routes.uploadVideo)
  .all(onlyPrivate)
  .get(getVideoUploadPage)
  .post(uploadVideo, newVideoUpload);

export default videoRouter;
