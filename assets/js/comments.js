const dataAttribute = document.getElementById(
  "videoController",
);
const commentForm = document.querySelector(
  ".videoComments form",
);

const commentTextArea =
  commentForm.querySelector("textarea");

const commentBtn = commentForm.querySelector("button");

const addComment = (text) => {
  const videoComments = document.querySelector(
    ".video_comments",
  );
  const newComment = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  newComment.appendChild(span);
  newComment.className = "video_comment";
  videoComments.prepend(newComment);
};

const handleAddComment = async (event) => {
  event.preventDefault();
  const { id } = dataAttribute.dataset;
  const text = commentTextArea.value;
  if (text === "") {
    return "";
  }
  const { status } = await fetch(
    `/api/video/${id}/comments`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    },
  );
  commentTextArea.value = "";
  if (status === 201) {
    addComment(text);
  }
};

if (commentForm) {
  commentForm.addEventListener("submit", handleAddComment);
}
