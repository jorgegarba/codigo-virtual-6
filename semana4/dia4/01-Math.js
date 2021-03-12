// La clase Math es una clase estática
// por ende, no se instancian objetos a partir de ella.

// Obtener un número aleatorio entre 50 y 170
let aleatorio = Math.random() * (170 - 50) + 50;
console.log(aleatorio);

// Redondear un número
console.log(Math.round(aleatorio));

// Techo de un número
// Si el número es:
// 3.1 => el techo es: 4
// 9.002 => el techo es: 10

console.log(Math.ceil(3.1));

// Piso de un número
// Si el númer es:
// 7.99 => el piso es: 7
// 50.89 => el piso es: 50

console.log(Math.floor(3.9));


// raíz cuadrada de un número
console.log(Math.sqrt(81));