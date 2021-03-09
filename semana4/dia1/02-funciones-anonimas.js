const sumar = function (a, b) {
  return a + b;
}



function multiplicar(n1, n2, fn) {
  let sumatoria = 0;
  for (let i = 0; i < n1; i++) {
    sumatoria = fn(sumatoria, n2);
  }
  console.log(sumatoria);
}

multiplicar(5, 6, sumar);