import {
  lengthFunction,
  pushFunction,
  someFunction,
  findFunction,
  reduceFunction,
} from "./functions.js";

describe("Given a lenghtFunction function", () => {
  describe("When it receives [2, 4]", () => {
    test("Then it should return 2", () => {
      const valueA = [2, 4];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(2);
    });
  });

  describe("When it receives []", () => {
    test("Then it should return 0", () => {
      const valueA = [];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(0);
    });
  });

  describe("When it receives [2, true, 'Cecina', NaN]", () => {
    test("Then it should return 4", () => {
      const valueA = [2, true, "Cecina", NaN];

      const checkLenght = lengthFunction(valueA);

      expect(checkLenght).toBe(4);
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

      expect(checkPush).toBe(4);
    });
  });
  describe("When it receives [2, 3, 4] and ''", () => {
    test("Then it should return 4", () => {
      const valueA = [2, 3, 4];
      const valueB = "";

      const checkPush = pushFunction(valueA, valueB);

      expect(checkPush).toBe(4);
    });
  });
});

describe("Given a someFunction function", () => {
  describe("When it receives `Marta`", () => {
    test("Then it should return true", () => {
      const coders = ["Marta", "Luis", "Pere"];
      const parameter = "Marta";

      const expectedResult = true;
      const expectedValue = someFunction(coders, parameter);

      expect(expectedValue).toBe(expectedResult);
    });
  });

  describe("When it receives `Taco`", () => {
    test("Then it should return false", () => {
      const coders = ["Marta", "Luis", "Pere"];
      const parameter = "Taco";

      const expectedResult = false;
      const expectedValue = someFunction(coders, parameter);

      expect(expectedValue).toBe(expectedResult);
    });
  });

  describe("When it receives `23`", () => {
    test("Then it should return false", () => {
      const coders = ["Marta", "Luis", "Pere", 23];
      const parameter = "23";

      const expectedResult = false;
      const expectedValue = someFunction(coders, parameter);

      expect(expectedValue).toBe(expectedResult);
    });
  });
});

describe("Given the function findFunction", () => {
  describe("When it receives 1, 2, 3, 4, 5 and we find 5", () => {
    test("Then it should return the 5", () => {
      const numberArray = [1, 2, 3, 4, 5];

      const expectedResult = 5;
      const expectedValue = findFunction(numberArray, (item) => item === 5);

      expect(expectedValue).toBe(expectedResult);
    });
  });
});

describe("Given the reduceFunction", () => {
  describe("When ir receives 23, 69, 420 and we want to sum", () => {
    test("Then it should return 512", () => {
      const numbersToSum = [23, 69, 420];

      const expectedResult = 512;
      const expectedValue = reduceFunction(
        numbersToSum,
        (valueA, valueB) => valueA + valueB
      );

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When ir receives 23, 69, 0 and we want to sum", () => {
    test("Then it should return 0", () => {
      const numbersToSum = [23, 69, 0];

      const expectedResult = 0;
      const expectedValue = reduceFunction(
        numbersToSum,
        (valueA, valueB) => valueA * valueB
      );

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When ir receives 'rosa' 'melano' and we want to sum", () => {
    test("Then it should return 'rosamelano'", () => {
      const numbersToSum = ["rosa", "melano"];

      const expectedResult = "rosamelano";
      const expectedValue = reduceFunction(
        numbersToSum,
        (valueA, valueB) => valueA + valueB
      );

      expect(expectedValue).toBe(expectedResult);
    });
  });
});
