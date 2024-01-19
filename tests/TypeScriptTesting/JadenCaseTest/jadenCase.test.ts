import '../../../src/TypeScriptKatas/JadenCaseStrings/jadenCase'

test("toJadenCase converts Strings to Jaden Case", () => {
    const result = "How can mirrors be real if our eyes aren't real".toJadenCase();
    expect(result).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");
})