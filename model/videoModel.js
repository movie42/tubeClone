import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "title is required",
  },
  description: {
    type: String,
    required: "description is required",
  },
  view: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Video", videoSchema);

export default model;
