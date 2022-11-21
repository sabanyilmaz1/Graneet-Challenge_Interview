const { binaryTransformation } = require("./ex2");

describe("binaryTransformation", () => {
  it("should work :", () => {
    const samples = [
      { M: 65535, expected: 0 },
      { M: 296, expected: 3 },
      { M: 123456, expected: 6 },
      { M: 0, expected: 1 },
      { M: 1, expected: 0 },
    ];
    for (const { M, expected } of samples) {
      expect(binaryTransformation(M)).toEqual(expected);
    }
  });
});
