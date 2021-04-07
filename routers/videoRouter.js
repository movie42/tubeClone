import express from "express";
import routes from "../routes";
import {
  getVideoUploadPage,
  videoUpload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middleware";

const videoRouter = express.Router();

// video upload
videoRouter.get(routes.uploadVideo, getVideoUploadPage);
videoRouter.post(routes.uploadVideo, uploadVideo, videoUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
