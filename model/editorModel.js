import mongoose from "mongoose";

const editorSchema = new mongoose.Schema({
  headTitle: {
    type: String,
    required: true
  },
  editorBody: {
    type: String
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

const model = mongoose.model("Editor", editorSchema);

export default model;
