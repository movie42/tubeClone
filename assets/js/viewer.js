import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
const data = document.getElementById("viewer");

const viewer = new Viewer({
  el: document.querySelector("#viewer")
});

const ol = viewer.setMarkdown({ data });
