import videoModel from "../model/videoModel";
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
    const video = await videoModel.create({
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
    const video = await videoModel.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
    throw error;
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "404 페이지를 찾을 수 가 없습니다." });
    setInterval(res.redirect(routes.home), 5000);
  }
};

export const editVideo = (req, res) => res.render("edit video");
export const deleteVideo = (req, res) => res.render("delete video");
