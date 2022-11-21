const { rendsLargent } = require("./ex1");

describe("rendsLargent", () => {
  it("should work :", () => {
    const samples = [
      {
        L: [
          500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
        ],
        M: 626.5,
        expected: 6,
      },
      { L: [500, 200, 100, 50, 20, 10, 5], M: 626.5, expected: -1 },
      { L: [500, 200, 100, 50, 20, 10, 5, 2], M: 1647, expected: 8 },
      { L: [500, 200, 100, 50, 20, 10, 5, 2], M: 0, expected: 0 },
    ];
    for (const { L, M, expected } of samples) {
      expect(rendsLargent(L, M)).toEqual(expected);
    }
  });
});
