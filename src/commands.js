import { feedbackVoice } from "./utils.js";

export const commands = {
  "go back": () => {
    window.history.back();
  },
  "scroll down": () => {
    window.scrollBy(0, 300);
  },
  "scroll up": () => {
    window.scrollBy(0, -300);
  },
  "read the page": () => {
    let content = document.body.innerText;
    feedbackVoice(content);
  },
  "zoom in": () => {
    document.body.style.fontSize =
      parseFloat(getComputedStyle(document.body).fontSize) + 2 + "px";
  },
  "zoom out": () => {
    document.body.style.fontSize =
      parseFloat(getComputedStyle(document.body).fontSize) - 2 + "px";
  },
  "high contrast mode": () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  },
  "normal mode": () => {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  },
  "go to top": () => {
    window.scrollTo(0, 0);
  },
  "go to bottom": () => {
    window.scrollTo(0, document.body.scrollHeight);
  },
  "open new tab": (url) => {
    window.open(url, "_blank").focus();
  },
  "close tab": () => {
    window.close();
  },
  refresh: () => {
    location.reload();
  },
  "search google": (query) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(searchUrl, "_blank").focus();
  },
  "play video": () => {
    const video = document.querySelector("video");
    if (video) {
      video.play();
    }
  },
  "pause video": () => {
    const video = document.querySelector("video");
    if (video) {
      video.pause();
    }
  },
  "mute video": () => {
    const video = document.querySelector("video");
    if (video) {
      video.muted = true;
    }
  },
  "unmute video": () => {
    const video = document.querySelector("video");
    if (video) {
      video.muted = false;
    }
  },
  "increase volume": () => {
    const video = document.querySelector("video");
    if (video && video.volume < 1) {
      video.volume = Math.min(1, video.volume + 0.1);
    }
  },
  "decrease volume": () => {
    const video = document.querySelector("video");
    if (video && video.volume > 0) {
      video.volume = Math.max(0, video.volume - 0.1);
    }
  },
  "toggle full screen": () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  },
  "print page": () => {
    window.print();
  },
  // TODO: Ajoutez ici d'autres commandes
};
