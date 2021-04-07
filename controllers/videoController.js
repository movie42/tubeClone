import VideoModel from "../model/videoModel";
import routes from "../routes";

//video upload

export const getVideoUploadPage = (req, res) =>
  res.render("uploadVideo", { pageTitle: "비디오 업로드" });
export const videoUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  try {
    const video = await VideoModel.create({
      title,
      fileUrl: path,
      description,
    });
    res.redirect(`/video/${routes.videoDetail(video.id)}`);
  } catch (err) {
    conosle.log("Error!!", err);
    res.render("404", { pageTitle: "알수없는 에러가 발생했습니다." });
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await VideoModel.findById(id);
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
    const video = await VideoModel.findById(id);
    res.render("editVideo", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.videoDetail(id));
  }
};
export const postEditVideo = async (req, res) => {
  const {
    body: { title, description },
    params: { id },
  } = req;
  try {
    const video = await VideoModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
      }
    );
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
    await VideoModel.findByIdAndRemove(id);
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
    res.redirect(`/video${routes.videoDetail(id)}`);
  }
};
