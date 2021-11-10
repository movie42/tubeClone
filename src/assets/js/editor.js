import Editor from "@toast-ui/editor";

const btn = document.querySelector("button");
const title = document.querySelector("form input");
const editorContainer = document.getElementById("editorSection");
const updateContainer = document.getElementById("updateSection");

function editor(container) {
  const board = new Editor({
    el: container,
    previewStyle: "vertical",
    height: "500px",
    initialEditType: "markdown"
  });

  return board;
}

function windowPathHandler(res) {
  const {
    data: { _id }
  } = res;

  window.location.pathname = `/board/${_id}`;
}

const handleSendData = async (event, url, title, markdown) => {
  const postData = async function () {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, markdown })
    });
    return response;
  };

  const getJson = await (await postData()).json();

  windowPathHandler(getJson);
};

if (editorContainer) {
  const address = "/board/create";
  const getEditor = editor(editorContainer);

  btn.addEventListener("click", function (e) {
    const head = title.value;
    const markdown = getEditor.getMarkdown();
    return handleSendData(e, address, head, markdown);
  });
} else if (updateContainer) {
  const getEditor = editor(updateContainer);
  const address = window.location.pathname;

  const getData = async function () {
    const id = window.location.pathname.split("/")[2];
    const data = await fetch(`/api/board/${id}/data`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    const getJson = await data.json();

    const {
      data: { markdown }
    } = getJson;

    getEditor.setMarkdown(markdown);
  };

  getData();

  btn.addEventListener("click", function (e) {
    const head = title.value;
    const markdown = getEditor.getMarkdown();
    return handleSendData(e, address, head, markdown);
  });
}
