var picpicpic = function (E) {
  const lFin = E.length - 1;
  const colFin = E[0].length - 1;

  //On parcourt la matrice
  for (let l = 0; l <= lFin; l++) {
    for (let c = 0; c <= colFin; c++) {
      //Si c'est une case qui n'est pas sur la première ligne et la première colonne
      if (c > 0 && l > 0)
        /* On prend la valeur maximum entre la case du dessus 
        et celle de gauche par rapport à la case actuelle 
        et on ajoute la valeur de la case actuelle */
        E[l][c] = Math.max(E[l][c] + E[l][c - 1], E[l - 1][c] + E[l][c]);
      //Si c'est une case qui est sur la première ligne ou la première colonne
      else if (l > 0 || c > 0) {
        // On ajoute la valeur de la case actuelle à la case du dessus
        if (c > 0) E[l][c] += E[l][c - 1];
        // On ajoute la valeur de la case actuelle à la case de gauche
        else E[l][c] += E[l - 1][c];
      }
      console.log(E);
    }
  }
  // On retourne la valeur de la case en bas à droite avec la valeur maximale possible
  console.log(E[lFin][colFin]);
  return E[lFin][colFin];
};

picpicpic([
  [5, 7, 3],
  [4, 2, 8],
  [7, 6, 5],
]);

module.exports = {
  picpicpic,
};
