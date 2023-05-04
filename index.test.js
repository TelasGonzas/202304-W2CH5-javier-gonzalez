import { lengthFunction, pushFunction } from "./index.js";

describe("Given a lenghtFunction function", () => {
  describe("When it receives [2, 4]", () => {
    test("Then it should return 2", () => {
      const valueA = [2, 4];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(2);
    });
  });
});

describe("Given a pushFunction function", () => {
  describe("When it receives [2 ,4] and 'isdi'", () => {
    test("Then it should return 3", () => {
      const valueA = [2, 4];
      const valueB = "isdi";

      const checkPush = pushFunction(valueA, valueB);

      expect(checkPush).toBe(3);
    });
  });

  describe("When it receives [2, 3, 4] and [6, 31]", () => {
    test("Then it should return 4", () => {
      const valueA = [2, 3, 4];
      const valueB = [6, 31];

      const checkPush = pushFunction(valueA, valueB);

      expect(checkPush).toBe(5);
    });
  });
});
