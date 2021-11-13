const dataAttribute = document.getElementById("videoController");
const commentForm = document.querySelector(".videoComments form");

const commentTextArea = commentForm.querySelector("textarea");

const commentBtn = commentForm.querySelector("button");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video_comments");
  const newComment = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  newComment.className = "video_comment";
  newComment.dataset.id = id;
  newComment.appendChild(span);
  videoComments.prepend(newComment);
};

const handleAddComment = async (event) => {
  event.preventDefault();
  const { id } = dataAttribute.dataset;
  const text = commentTextArea.value;
  if (text === "") {
    return "";
  }
  const response = await fetch(`/api/video/${id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    commentTextArea.value = "";
    const { newComment } = await response.json();
    addComment(text, newComment);
  }
};

if (commentForm) {
  commentForm.addEventListener("submit", handleAddComment);
}
