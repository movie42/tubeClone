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

// video upload
videoRouter
  .route(routes.uploadVideo)
  .get(onlyPrivate, getVideoUploadPage)
  .post(onlyPrivate, uploadVideo, newVideoUpload);

videoRouter.route(routes.videoDetail()).get(videoDetail);

//edit video
videoRouter
  .route(routes.editVideo())
  .get(onlyPrivate, getEditVideo)
  .post(onlyPrivate, postEditVideo);

videoRouter.route(routes.deleteVideo()).get(onlyPrivate, deleteVideo);

export default videoRouter;
