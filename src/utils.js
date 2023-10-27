export const findWordInPage = (word) => {
  if (word) {
    if (!window.find(word)) {
      feedbackVoice(`Cannot find "${word}" on the page.`);
    }
  } else {
    feedbackVoice("Please specify the word you want to search for.");
  }
};

export function feedbackVoice(message) {
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
}
