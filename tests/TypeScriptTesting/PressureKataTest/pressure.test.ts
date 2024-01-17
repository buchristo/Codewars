import { doubleInteger } from "../../../src/TypeScriptKatas/PressureKata/pressure";

describe("testing pressure.ts function", () => {
    test.each([
        [2, 4],   // Input: 2, Expected Output: 4
        [0, 0],   // Input: 0, Expected Output: 0
        [-3, -6], // Input: -3, Expected Output: -6
        // Add more test cases as needed
    ])('doubling %i should be %i', (input, expected) => {
         expect(doubleInteger(input)).toBe(expected);
    });
});
