import express from "express";

import {
  getEditor,
  postEditor,
  getBoardDetail,
} from "../controllers/boardController";

const board = express.Router();

// list
// board.route("/").get(getNoticeList);

// create;
board.route("/create").get(getEditor).post(postEditor);

// // update;
// board.route("/create").get(getEditorUpdate).post(postEditorUpdate);

// detail(read)
board.route("/:id([0-9a-f]{24})").get(getBoardDetail);

// // delete;
// notice.route("/delete").delete(deleteNoticeData);

export default board;
