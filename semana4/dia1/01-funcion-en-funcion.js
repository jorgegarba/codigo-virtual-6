function areaCirculo(radio) {
  const PI = 3.1416;

  function cuadrado(n) {
    return n * n
  }

  return PI * cuadrado(radio);

}

console.log(areaCirculo(15));