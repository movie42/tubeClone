import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";

const viewerContainer = document.getElementById("viewer");

if (viewerContainer) {
  const viewer = new Viewer({
    el: document.querySelector("#viewer"),
  });

  const getData = async function () {
    const id = window.location.pathname.split("/")[2];
    const data = await fetch(`/api/board/${id}/data`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const getJson = await data.json();

    const {
      data: { markdown },
    } = getJson;

    viewer.setMarkdown(markdown);
  };

  getData();
}
