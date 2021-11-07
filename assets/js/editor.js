import Editor from "@toast-ui/editor";
const btn = document.querySelector("button");

const editor = new Editor({
  el: document.querySelector("#editorSection"),
  previewStyle: "vertical",
  height: "500px",
  initialEditType: "markdown",
});

async function handleEditor(e) {
  const editorBody = editor.getHTML();
  const data = await fetch("/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ editorBody }),
  });
}

btn.addEventListener("click", handleEditor);
