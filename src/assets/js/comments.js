import DOMPurify from "dompurify";

const dataAttribute = document.getElementById("videoController");
const commentForm = document.querySelector(".videoComments form");

const commentTextArea = commentForm.querySelector("textarea");

const commentBtn = commentForm.querySelector("button");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video_comments");
  const newComment = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = ` ${text}`;
  newComment.className = "video_comment";
  newComment.dataset.id = id;
  newComment.appendChild(span);
  videoComments.prepend(newComment);
};

const handleAddComment = async (event) => {
  event.preventDefault();
  const { id } = dataAttribute.dataset;
  const textValue = commentTextArea.value;
  if (textValue === "") {
    return "";
  }

  const text = DOMPurify.sanitize(textValue, {
    ADD_ATTR: ["rel", "target", "hreflang", "type"],
    FORBID_TAGS: [
      "input",
      "script",
      "textarea",
      "form",
      "button",
      "select",
      "meta",
      "style",
      "link",
      "title",
      "object",
      "base"
    ]
  });

  const response = await fetch(`/api/video/${id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  if (response.status === 201) {
    commentTextArea.value = "";
    const { newComment } = await response.json();
    addComment(text, newComment);
  }
};

// dompurify test

// function handleDirty(e) {
//   const dirty = e.target.value;

//   function changeTextValue(text) {
//     console.log(text);
//     const changeText = text.replace(/&lt;/gi, "<");
//     console.log(changeText);
//     return changeText;
//   }

//

//   const value = changeTextValue(clean);

//   e.target.value = value;
// }

if (commentForm) {
  commentForm.addEventListener("submit", handleAddComment);
}
