import { feedbackVoice } from "./utils.js";
import { commands } from "./commands.js";

export function commandProcessor(text) {
  if (commands[text]) {
    commands[text]();
    // feedbackVoice(`Executed command: ${text}`);
  } else {
    // feedbackVoice("Sorry, I did not understand that command.");
  }
}
