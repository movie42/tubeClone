const video = document.querySelector("video");
const videoController = document.getElementById("videoController");

const handleVideoEnd = (e) => {
  const { id } = videoController.dataset;
  fetch(`/api/video/${id}/view`, { method: "POST" });
};

video.addEventListener("ended", handleVideoEnd);
