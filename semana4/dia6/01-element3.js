function qs(selector) {
  return document.querySelector(selector);
}

const qsall = _ => document.querySelectorAll(_);


//modificando los estilos de un elemento
// let body = qs("body");
// body.style.backgroundColor = "#222";
// body.style.color = "#eee";

let lis = qsall(".header__item");
lis = Array.from(lis);

lis.forEach((headerItem) => {
  // configurando el click de cada <li>
  headerItem.onclick = function () {
    const itemActive = qs(".header__item.active");
    itemActive.classList.remove("active");
    headerItem.classList.add("active");
  }
});

/**
 * Modificar el tema a través del botón foquito
 */

let headerTheme = qs(".header__theme");
let linkTheme = qs("#linkTheme");

headerTheme.onclick = function () {
  if (linkTheme.getAttribute("href").indexOf("light") >= 0) {
    //hemos preguntado si la palabra "light" existe en el string que tiene el atributo href
    linkTheme.setAttribute("href", "./01-element3-dark.css");
  } else {
    linkTheme.setAttribute("href", "./01-element3-light.css");
  }
}