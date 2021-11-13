import express from "express";

import {
  getEditor,
  postEditor,
  getBoardDetail,
  getNoticeList,
  getEditorUpdate,
  postEditorUpdate,
  deleteNoticeData,
} from "../controllers/boardController";

const board = express.Router();

// list
board.route("/").get(getNoticeList);

// create;
board.route("/create").get(getEditor).post(postEditor);

// // update;
board
  .route("/:id([0-9a-f]{24})/edit")
  .get(getEditorUpdate)
  .post(postEditorUpdate);

// detail(read)
board.route("/:id([0-9a-f]{24})").get(getBoardDetail);

// // delete;
board.route("/:id([0-9a-f]{24})/delete").get(deleteNoticeData);

export default board;
