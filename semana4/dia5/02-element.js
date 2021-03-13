let parrafo1 = document.getElementById("parrafo1");
/**
 *  elemento.innerText
 * obtiene o asigna el texto interno de un elemento
 * <p> esssteee textoooooooo </p>
 */
console.log(parrafo1.innerText);

parrafo1.innerText = "Este es el nuevo texto";


let listaLanguage = document.querySelectorAll(".language");
listaLanguage = Array.from(listaLanguage);

/**
 * elemento.innerHTML [GET y SET]
 * similar a innerText, sin embargo, pueden renderizarse elementos HTML
 */
listaLanguage.forEach((li, i) => {
  li.innerHTML = `${li.innerHTML} <small><em>${i}</em></small>`;
})

// ejercicio
// iterar la lista de películas y agregar dichas peliculas
// como elementos <li></li> al <ul></ul> que contiene los lenguajes de
// programación

const llenarPeliculas = () => {
  const ulLenguajes = document.querySelector("#parrafo1 + ul");
  peliculas.forEach((objPeli) => {
    const li = document.createElement("li");
    li.innerText = objPeli.original_title;
    ulLenguajes.append(li)
  })
}
llenarPeliculas();

const llenarGeneros = () => {
  let selectGeneros = document.getElementById("selectGeneros");
  generos.forEach((objGenero) => {
    const option = document.createElement("option");
    option.innerText = objGenero.name;
    selectGeneros.appendChild(option);
  })
}
llenarGeneros();

const llenarPeliculasSelect = () => {
  let selectPeliculas = document.getElementById("selectPeliculas");
  peliculas.forEach((objPeliculas) => {
    const option = document.createElement("option");
    option.innerText = objPeliculas.original_title;
    selectPeliculas.appendChild(option);
  })
}
llenarPeliculasSelect();