import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: "email is required",
  },
  password: {
    type: String,
    required: "password is required",
  },
  avatarUrl: String,
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
