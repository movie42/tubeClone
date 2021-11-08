import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Video",
  },
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
