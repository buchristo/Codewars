import { checkForFactor } from "../../../src/TypeScriptKatas/CheckFactorKata/factor"

describe("testing factor.ts function", () => {
    test.each([
        [10, 2, true],
        [9, 2, false],
        [63, 7, true],
    ])("check if %i % %i = 0", (base, factor, expected) => {
        expect(checkForFactor(base, factor)).toBe(expected);
    });
});