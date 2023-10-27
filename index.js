document
        .getElementById("startListening")
        .addEventListener("click", function () {
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

          // Fonctions
          const commands = {
            'go back': () => { window.history.back(); },
            'scroll down': () => { window.scrollBy(0, 300); },
            'read the page': () => {
                let content = document.body.innerText;
                feedbackVoice(content);
            },
            'zoom in': () => {
                document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) + 2) + "px";
            },
            'zoom out': () => {
                document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) - 2) + "px";
            },
            'high contrast mode': () => {
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
            },
            'normal mode': () => {
                document.body.style.backgroundColor = '';
                document.body.style.color = '';
            },
            'go to top': () => { 
                window.scrollTo(0, 0); 
            },
            'go to bottom': () => { 
                window.scrollTo(0, document.body.scrollHeight); 
            },

            // ... Plus de commandes peuvent être définies
          };

          const findWordInPage = (word) => {
              if (word) {
                  if (!window.find(word)) {
                      feedbackVoice(`Cannot find "${word}" on the page.`);
                  }
              } else {
                  feedbackVoice("Please specify the word you want to search for.");
              }
          }

          function commandProcessor(text) {
            if (commands[text]) {
              commands[text]();
              // feedbackVoice(`Executed command: ${text}`);
            } else {
              // feedbackVoice('Sorry, I did not understand that command.');
            }
          }

          function feedbackVoice(message) {
            const utterance = new SpeechSynthesisUtterance(message);
            window.speechSynthesis.speak(utterance);
          }

          const recognition = new (window.SpeechRecognition ||
            window.webkitSpeechRecognition)();
          recognition.interimResults = true;

          recognition.onresult = (event) => {
            let last = event.results.length - 1;
            let text = event.results[last][0].transcript;

            if(text.startsWith("find ")) {
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