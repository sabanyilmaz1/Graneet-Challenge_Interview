var rendsLargent = function (L, M) {
  let T = [];

  for (let i = 0; i < L.length; i++) {
    while (M - L[i] >= 0) {
      T.push(L[i]);
      M = M - L[i];
    }
    if (M == 0) {
      console.log(T);
      console.log(T.length);
      return T.length;
    }
  }
  return -1;
};

module.exports = {
  rendsLargent,
};

const test = rendsLargent([500, 200, 100, 50, 20, 10, 5], 0);
console.log(test);
