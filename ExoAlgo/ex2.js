var binaryTransformation = function (M) {
  //Conversion en binaire
  let L = [];
  if (M == 0) {
    L = [0];
  }
  while (M > 0) {
    if (M % 2) {
      L.push(1);
    } else {
      L.push(0);
    }
    M = Math.floor(M / 2);
  }

  // L = L.reverse(); Pas besoin de faire un reverse car on a pas de retourner le tableau binaire
  // Compter le nombre de sequence de 0 et retourner le max
  let max = 0;
  let count = 0;
  for (let i = 0; i < L.length; i++) {
    if (L[i] === 0) {
      count = count + 1;
    }
    if (L[i] == 1) {
      count = 0;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
};

module.exports = {
  binaryTransformation,
};
