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
videoRouter.get(routes.uploadVideo, onlyPrivate, getVideoUploadPage);
videoRouter.post(routes.uploadVideo, onlyPrivate, uploadVideo, newVideoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
//edit video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

export default videoRouter;
