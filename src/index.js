import { findWordInPage } from "./utils.js";
import { commandProcessor } from "./commandProcessor.js";

export function webVoiceHub() {
  // ... (le reste de votre code)

  // Ajoutez un délai de 2 secondes avant d'initialiser la reconnaissance vocale
  setTimeout(function () {
    startListeningButton.addEventListener("click", function () {
      // Vérifiez si la reconnaissance vocale est supportée par le navigateur
      if (
        !("SpeechRecognition" in window) &&
        !("webkitSpeechRecognition" in window)
      ) {
        alert(
          "Your browser does not support speech recognition. Please try a modern browser like Chrome."
        );
        return;
      }

      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        let last = event.results.length - 1;
        let text = event.results[last][0].transcript;

        if (text.startsWith("find ")) {
          let word = text.replace("find ", "").trim();
          findWordInPage(word);
          return;
        }

        document.getElementById("output").innerText = text; // Affichez le texte dans la div
        commandProcessor(text.toLowerCase()); // Envoyez le texte à notre processeur de commande
      };

      recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
      };

      recognition.start(); // Commencez la reconnaissance
    });
  }, 2000); // Délai de 2 secondes
}
