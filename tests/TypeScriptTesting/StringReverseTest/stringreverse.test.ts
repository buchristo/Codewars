import { reverseWords } from "../../../src/TypeScriptKatas/StringReverse/reverseString";

describe("testing reverseWords.ts function", () => {
    test.each([
        ["double", "elbuod"],
        ["The quick brown fox jumps over the lazy dog.", "ehT kciuq nworb xof spmuj revo eht yzal .god"],
        ["double  spaced  words", "elbuod  decaps  sdrow"],
    ])('reversing %i should be %i', (input, expected) => {
         expect(reverseWords(input)).toBe(expected);
    });
});