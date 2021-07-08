import Video from "../model/videoModel";
import User from "../model/userModel";
import Comment from "../model/commentModel";
import routes from "../routes";

//video upload

export const getVideoUploadPage = (req, res) =>
  res.render("uploadVideo", { pageTitle: "비디오 업로드" });

export const newVideoUpload = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { title, description },
    file: { path },
  } = req;
  try {
    const newVideo = await Video.create({
      title,
      fileUrl: path,
      description,
      creator: _id,
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    await user.save();
    return res.redirect(routes.home);
  } catch (err) {
    console.log("Error!!", err);
    return res.status(400).render("404", {
      pageTitle: "알수없는 에러가 발생했습니다.",
    });
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comment");
    return res.render("videoDetail", {
      pageTitle: video.title,
      video,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).render("404", {
      pageTitle: "404 페이지를 찾을 수 가 없습니다.",
    });
  }
};

//Edit Video
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
    session: { _id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== String(_id)) {
      return res.status(403).redirect("/");
    } else {
      return res.render("editVideo", {
        pageTitle: video.title,
        video,
      });
    }
  } catch (error) {
    return res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    session: { _id },
    body: { title, description },
    params: { id },
  } = req;
  if (String(video.creator) !== String(_id)) {
    return res.status(403).redirect("/");
  }
  try {
    const video = Video.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
      },
    );
    await res.save();
    return res.redirect(
      `/video${routes.videoDetail(video.id)}`,
    );
  } catch (error) {
    console.log(error);
    return res.status(404).render("404", {
      pageTitle: "페이지를 찾을 수 없습니다.",
    });
  }
};

export const deleteVideo = async (req, res) => {
  const {
    session: { _id },
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (String(video.creator) !== String(_id)) {
      const message = "비디오 삭제 권한이 없습니다.";
      return res.status(404).redirect("/");
    } else {
      await Video.findByIdAndRemove({ _id: id });
      return res.redirect(routes.home);
    }
  } catch (error) {
    console.log(error);
    return res.redirect(routes.videoDetail(id));
  }
};

export const registerView = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  video.view += 1;
  await video.save();
  return res.sendStatus(200);
};

export const registerComment = async (req, res) => {
  const {
    params: { id },
    session: { user },
    body: { text },
  } = req;

  const video = await Video.findById(id);
  if (!video) {
    return res.sendStatus(404);
  }
  const comment = await Comment.create({
    text,
    creator: user._id,
    video: id,
  });
  video.comment.push(comment._id);
  const userComment = await User.findById(user._id);
  await video.save();
  userComment.comment.push(comment._id);
  await userComment.save();
  return res.status(201).json({ newComment: comment._id });
};
