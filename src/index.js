import "./db";
import app from "./app";
import "./model/boradModel";
import "./model/userModel";
import "./model/videoModel";
import "./model/commentModel";

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
