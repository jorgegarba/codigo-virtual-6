/**
 * 1. atrapar a todos los cards
 */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  /**
   * elemento.onmouseover
   * Evento que se dispara cuando el mouse pasa
   * por encima del elemento
   */
  card.onmouseover = () => {
    card.classList.remove("shadow-sm");
    card.classList.add("shadow");
  }
  /**
   * elemento.onmouseout
   * Evento que se dispara cuando el mouse libera
   * o sale del área de un elemento
   */
  card.onmouseout = () => {
    card.classList.remove("shadow");
    card.classList.add("shadow-sm");
  }

})