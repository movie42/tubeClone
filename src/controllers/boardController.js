import Board from "../model/boradModel";

// list

export const getNoticeList = async (req, res) => {
  try {
    const data = await Board.find({});
    return res.render("editor/getDataList", {
      pageTitle: "게시판",
      data
    });
  } catch (e) {
    console.log(e);
  }
};

// create
export const getEditor = (req, res) => {
  try {
    return res.render("editor/editor", {
      pageTitle: "테스트 에디터"
    });
  } catch (e) {
    console.log(e);
    res.render("404", { pageTitle: "404" });
  }
};

export const postEditor = async (req, res) => {
  const {
    session: {
      user: { _id }
    },
    body: { title, markdown }
  } = req;

  try {
    const data = await Board.create({
      title,
      markdown,
      creator: _id
    });

    return res.status(303).json({ data });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

// detail(read)

export const getBoardDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const data = await Board.findById(id);

    return res.render("editor/getDetail", {
      pageTitle: data.title,
      data
    });
  } catch (e) {
    console.log(e);
  }
};

// // update

export const getEditorUpdate = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const data = await Board.findById(id);

    return res.render("editor/getUpdate", {
      pageTitle: `${data.title} 수정`,
      data
    });
  } catch (e) {
    console.log(e);
  }
};

export const postEditorUpdate = async (req, res) => {
  const {
    params: { id },
    body: { title, markdown },
    session: {
      user: { _id }
    }
  } = req;

  try {
    const data = await Board.findByIdAndUpdate(
      {
        _id: id
      },
      {
        title,
        markdown,
        creator: _id
      }
    );

    return res.status(201).json({ data });
  } catch (e) {
    console.log(e);
  }
};

// delete

export const deleteNoticeData = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    await Board.findByIdAndDelete(id);
    return res.redirect("/board");
  } catch (e) {
    console.log(e);
  }
};
