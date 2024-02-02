import { processCommand } from "../src/commandProcessor";
import { commands } from "../src/commands";

// Mock de la fonction feedbackFunction
const mockFeedbackFunction = jest.fn();

// Mock des méthodes globales utilisées dans les commandes
global.window = Object.create(window);
window.history = { back: jest.fn() };
window.scrollBy = jest.fn();
window.scrollTo = jest.fn();
Object.defineProperty(window, "document", {
  value: {
    body: {
      scrollHeight: 1000,
      innerText: "test",
      style: {
        fontSize: "16px",
        backgroundColor: "",
        color: "",
      },
    },
    addEventListener: jest.fn(),
  },
});

describe("commands", () => {
  it("should have specific commands defined", () => {
    expect(commands["go back"]).toBeDefined();
    expect(commands["scroll down"]).toBeDefined();
    // Ajoutez ici des tests pour les autres commandes
  });
});

describe("processCommand", () => {
  it("should call the correct command", () => {
    window.history.back = jest.fn();

    processCommand("go back", mockFeedbackFunction);
    expect(window.history.back).toHaveBeenCalled();
    expect(mockFeedbackFunction).toHaveBeenCalledWith(
      "Executed command: go back"
    );

    processCommand("scroll down", mockFeedbackFunction);
    expect(window.history.back).toHaveBeenCalled();
    expect(mockFeedbackFunction).toHaveBeenCalledWith(
      "Executed command: scroll down"
    );

    // TODO: Ajoutez ici des tests pour les autres commandes
  });

  it("should give feedback when command is not understood", () => {
    processCommand("unknown command", mockFeedbackFunction);
    expect(mockFeedbackFunction).toHaveBeenCalledWith(
      "Sorry, I did not understand that command."
    );
  });
});
