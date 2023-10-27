import commandProcessor from "../src/commandProcessor.js";

describe("commandProcessor", () => {
  it("returns a function for valid commands", () => {
    const validCommand = "go back";
    const result = commandProcessor(validCommand);
    expect(typeof result).toBe("function");
  });

  it("returns null for invalid commands", () => {
    const invalidCommand = "fly to the moon";
    const result = commandProcessor(invalidCommand);
    expect(result).toBeNull();
  });
});
