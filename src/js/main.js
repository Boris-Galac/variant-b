const playBtn = document.querySelector(".play-btn");
const video = document.querySelector(".video-overlay");
playBtn.addEventListener("click", (e) => {
  const videoScreen = document.createElement("video");
  videoScreen.classList.add("video-screen");
  videoScreen.setAttribute("controls", "");
  videoScreen.src = "/src/assets/video-overlay-1.mp4";
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  overlay.append(videoScreen);
  document.body.append(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target.matches(".overlay")) {
      overlay.remove();
    }
  });
});
