import Video from "../model/videoModel";
import routes from "../routes";

//video upload

export const getVideoUploadPage = (req, res) =>
  res.render("uploadVideo", { pageTitle: "비디오 업로드" });

export const newVideoUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  try {
    const newVideo = await Video.create({
      title,
      fileUrl: path,
      description,
      creator: req.user.id,
    });
    req.user.videos.push(newVideo.id);
    await req.user.save();
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (err) {
    console.log("Error!!", err);
    res.render("404", { pageTitle: "알수없는 에러가 발생했습니다." });
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id).populate("creator");
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "404 페이지를 찾을 수 가 없습니다." });
  }
};

//Edit Video
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== String(req.user.id)) {
      const message = "비디오 수정 권한이 없습니다.";
      res.render("404", { pageTitle: "비디오 수정 권한이 없습니다.", message });
    } else {
      res.render("editVideo", { pageTitle: video.title, video });
    }
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    body: { title, description },
    params: { id },
  } = req;
  try {
    const video = Video.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
      }
    );
    await res.save();
    res.redirect(`/video${routes.videoDetail(video.id)}`);
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "페이지를 찾을 수 없습니다." });
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== String(req.user.id)) {
      const message = "비디오 삭제 권한이 없습니다.";
      res.render("404", {
        pageTitle: "비디오 삭제 권한이 없습니다.",
        message,
      });
    } else {
      await Video.findByIdAndRemove({ _id: id });
      res.redirect(routes.home);
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.videoDetail(id));
  }
};
