/* import { validate } from "./validation.js";

describe("Testing Validation", () => {
  it("Test valid input", () => {
    const errors = validate("abc");
    expect(0, errors.length);
  });

  it("Test input with no characters", () => {
    const errors = validate("");
    expect(1, errors.length);
    expect("Field must not empty!", errors[0]);
  });

  it("Test input with wrong characters", () => {
    const errors = validate("ábécédé123");
    expect(1, errors.length);
    expect(
      "Word can only contain english letters. No whitespace or other characters allowed.",
      errors[0]
    );
  });

  it("Test input with wrong characters", () => {
    const errors = validate(
      "aaaaaaaaaaaaassssssssdldldldllfflgkjhjkrhglksdgljkasdbfjadvkhadvfaksvfaehvakdgvakdhvgakdhgvakhdvgakhdgvakhdgvakdhgvvkadhgvakdhvgahkdvgkahdvgakhdgvakdh"
    );
    expect(1, errors.length);
    expect("The word is to long!", errors[0]);
  });
});
*/
