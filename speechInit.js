export function initializeRecognition(onResult, onError) {
  if (
    !("SpeechRecognition" in window) &&
    !("webkitSpeechRecognition" in window)
  ) {
    alert(
      "Your browser does not support speech recognition. Please try a modern browser like Chrome."
    );
    return null;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.interimResults = true;
  recognition.onresult = onResult;
  recognition.onerror = onError;

  recognition.start();
  return recognition;
}
