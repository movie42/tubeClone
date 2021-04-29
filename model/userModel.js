import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  avatarUrl: String,
  githubId: Number,
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const model = mongoose.model("User", userSchema);

export default model;
