const { picpicpic } = require("./ex3");

describe("picpicpic", () => {
  it("should work :", () => {
    const samples = [
      {
        E: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 0, 9],
        ],
        expected: 25,
      },
      {
        E: [
          [4, 9, 7],
          [7, 4, 2],
          [2, 8, 9],
        ],
        expected: 34,
      },
      {
        E: [
          [0, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ],
        expected: 3,
      },
    ];
    for (const { E, expected } of samples) {
      expect(picpicpic(E)).toEqual(expected);
    }
  });
});
