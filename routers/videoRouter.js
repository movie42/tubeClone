import express from "express";
import routes from "../routes";
import {
  getVideoUploadPage,
  videoUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

// video upload
videoRouter.get(routes.uploadVideo, getVideoUploadPage);
videoRouter.post(routes.uploadVideo, uploadVideo, videoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
//edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
