import Editor from "@toast-ui/editor";

const btn = document.querySelector("button");
const title = document.querySelector("form input");

const editor = new Editor({
  el: document.querySelector("#editorSection"),
  previewStyle: "vertical",
  height: "500px",
  initialEditType: "markdown"
});

async function handleEditor(e) {
  const editorBody = editor.getMarkdown();
  const headTitle = title.value;
  const data = await fetch("/test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ headTitle, editorBody })
  });
}

btn.addEventListener("click", handleEditor);
