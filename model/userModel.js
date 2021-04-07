import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "id is required",
  },
  password: {
    type: String,
    required: "password is required",
  },
  name: {
    type: String,
    required: "name is required",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  Comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const model = mongoose.model("User", userSchema);

export default model;
