import { peliculas, titulo } from "./data-peliculas.js"


const contenedor = document.querySelector("#contenedor");
const modalImagen = document.querySelector("#modalImagen");
const modalTitulo = document.querySelector("#modalTitulo");
const modalOverview = document.querySelector("#modalOverview");
const modalPelicula = new bootstrap.Modal(document.getElementById("modalPelicula"))
const carouselMain = document.querySelector(".main-carousel");

const abrirModalPelicula = objPelicula => {

  modalImagen.src = `https://image.tmdb.org/t/p/w500${objPelicula.poster_path}`;
  modalTitulo.innerText = objPelicula.original_title;
  modalOverview.innerText = objPelicula.overview;
  modalPelicula.show();

}

const fillMovies = () => {


  peliculas.forEach((objPelicula) => {
    // creando la columna
    const col = document.createElement("div");
    col.classList.add("col-md-3");
    // creando el card
    const card = document.createElement("div")
    card.classList.add("card");
    card.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${objPelicula.poster_path}" alt="" class="card-img-top">`;

    // creando el cardbody
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `<h4 class="card-title">${objPelicula.original_title}</h4>`;

    // creando el párrafo de la sinopsis
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = `${objPelicula.overview.substr(0, 80)} ...`;

    //creando el link de leer mas!
    const cardLink = document.createElement("a");
    cardLink.innerText = "leer mas...";
    cardLink.href = "#";
    cardLink.onclick = (e) => {
      e.preventDefault();
      abrirModalPelicula(objPelicula);
    }

    // creando el ul de las características
    const cardFeatures = document.createElement("ul");
    cardFeatures.classList.add("movie__features");

    const iconoAdulto = objPelicula.adult ? `<i class="fas fa-ban text-danger"></i>` : ` <i class="fas fa-check text-success"></i>`;
    const listaString = `
    <li>
      <small class="text-muted">
        <i class="fas fa-calendar"></i> ${objPelicula.release_date}
      </small>
    </li>
    <li>
      <small class="text-muted">
        <i class="fas fa-star text-warning"></i> ${objPelicula.vote_average}
      </small>
    </li>
    <li>
      <small class="text-muted">
        <i class="fas fa-heart text-danger"></i> ${objPelicula.vote_count}
      </small>
    </li>
    <li>
      <small class="text-muted">
        +18
        ${iconoAdulto}
      </small>
    </li>`;
    cardFeatures.innerHTML = listaString;


    col.appendChild(card);
    card.appendChild(cardBody);
    cardText.appendChild(cardLink);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardFeatures);
    contenedor.appendChild(col);

  });


}
fillMovies();


const dibujarPopulares = () => {
  peliculas.forEach((objPelicula) => {
    const cell = document.createElement("div");
    cell.classList.add("carousel-cell");
    cell.innerHTML = `<img src="https://image.tmdb.org/t/p/w500/${objPelicula.poster_path}" />`;
    carouselMain.appendChild(cell);
  })
}

dibujarPopulares();

const iniciarFlickity = () => {
  const elem = document.querySelector(".main-carousel");
  const flick = new Flickity(elem, { cellAlign: "left", contain: true });
}
iniciarFlickity();