import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", (_) => {
  console.log(`Database connected`);
});
db.on("error", (err) => {
  console.error("connection error", err);
});
