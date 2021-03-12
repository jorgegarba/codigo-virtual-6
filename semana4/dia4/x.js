let arreglo = [1, 5, 3];

const forich = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

forich(arreglo, (ele, index) => {
  console.log(`Elemento ${index} = ${ele}`);
})