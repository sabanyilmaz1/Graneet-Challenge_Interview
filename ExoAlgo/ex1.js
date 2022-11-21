var rendsLargent = function (L, M) {
  let T = [];

  for (let i = 0; i < L.length; i++) {
    while (M - L[i] >= 0) {
      T.push(L[i]);
      M = M - L[i];
    }
    if (M == 0) {
      return T.length;
    }
  }
  return -1;
};

module.exports = {
  rendsLargent,
};
