function sumUntil(maxValue) {
  let somma = 0;

  for (let minValue = 1; minValue <= maxValue; minValue++) {
    somma += minValue;
  }
  return somma;
}

console.log(sumUntil(5));