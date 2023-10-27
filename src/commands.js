export const commands = {
  "go back": () => {
    window.history.back();
  },
  "scroll down": () => {
    window.scrollBy(0, 300);
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

  // ... Plus de commandes peuvent être définies
};
