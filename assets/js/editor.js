import Editor from "@toast-ui/editor";

const editor = new Editor({
  el: document.querySelector("#editorSection"),
  previewStyle: "vertical",
  height: "500px",
  initialEditType: "markdown"
});
