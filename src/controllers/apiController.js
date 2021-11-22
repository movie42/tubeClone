import Board from "../model/boradModel";
import Video from "../model/videoModel";
import Comment from "../model/commentModel";
import User from "../model/userModel";

export const getDB = async (req, res) => {
  const {
    params: { name, value },
  } = req;
  let exist;
  try {
    if (name === "email") {
      exist = await User.exists({ email: value });
    } else if (name === "userName") {
      exist = await User.exists({ userName: value });
    }

    return res.status(200).json({ exist });
  } catch (e) {
    console.log(e);
  }
};

// view
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

// comment

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

// get board data
export const getBoradData = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const data = await Board.findById(id);
    res.status(200).json({ data });
  } catch (e) {
    console.log(e);
  }
};
