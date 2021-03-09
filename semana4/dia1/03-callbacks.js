

function buscarPorDni(dni, fn) {

  let rpta = "en-blanco";

  setTimeout(function () {

    rpta = "Jorge Garnica Blanco";
    fn(rpta);
  }, 2000);

}

buscarPorDni("45412387", function (nombre) {
  console.log(nombre);
});
