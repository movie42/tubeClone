import Board from "../model/boradModel";

// create
export const getEditor = (req, res) => {
  try {
    return res.render("editor/testEditor", { pageTitle: "테스트 에디터" });
  } catch (e) {
    console.log(e);
    res.render("404", { pageTitle: "404" });
  }
};

export const postEditor = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { title, markdown },
  } = req;

  try {
    const data = await Board.create({
      title,
      markdown,
      creator: _id,
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
    params: { id },
  } = req;

  try {
    const data = await Board.findById(id);

    return res.render("editor/getDetail", { pageTitle: data.title, data });
  } catch (e) {
    console.log(e);
  }
};

// export const getEditorData = async (req, res) => {
//   try {
//     const data = await Editor.find({});

//     const body = data.map((value) => value.editorBody);
//     console.log(body);
//     return res.render("editor/getEditorData", {
//       pageTitle: "데이터 얻기",
//       body,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// // update

// // delete
