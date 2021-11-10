import mongoose from "mongoose";

const editorSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
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
});

const model = mongoose.model("Editor", editorSchema);

export default model;
