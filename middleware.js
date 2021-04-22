import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/video/" });
const multerAvatar = multer({ dest: "uploads/avatar/" });

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatarFile");

export const localMiddleware = (req, res, next) => {
  res.locals.webTitle = "클론튜브";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};
