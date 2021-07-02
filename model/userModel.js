import bcrypt from "bcrypt";
import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const model = mongoose.model("User", userSchema);

export default model;
