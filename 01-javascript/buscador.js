const busqueda = document.querySelector("#empleos-search-input");

const encabezadoResultados = document.querySelector(".job-listings-header");

const numeroResultados = document.createElement("p");
numeroResultados.classList.add('resultados-conteo');
encabezadoResultados.appendChild(numeroResultados);

busqueda.addEventListener("input", () => {
  const terminoBusqueda = busqueda.value.trim().toLowerCase();

  //Convertir NodeList a array
  const h3TituloVacante = Array.from(
    document.querySelectorAll(".titulo-vacante")
  );

  //Filtrar los h3 que coinciden con la búsqueda
  const coincidencias = h3TituloVacante.filter((h3) => {
    const textoTitulo = h3.innerText.toLowerCase();
    return textoTitulo.includes(terminoBusqueda);
  });

  //Recorrer cada h3 para mostrar solo las coincidencias
  h3TituloVacante.forEach((h3) => {
    //Closest sube por el DOM desde h3 hasta encontrar el ancestro .job-listing-card
    const article = h3.closest(".job-listing-card");
    const isShown = coincidencias.includes(h3);

    article.classList.toggle("is-hidden", !isShown);
  });

  if(terminoBusqueda === '') {
    numeroResultados.textContent = '';
  } else if (coincidencias.length === 0 ) {
    numeroResultados = 'No se encontraron resultados.'
  } else {
    numeroResultados.textContent = `Mostrando ${coincidencias.length} de ${h3TituloVacante.length}`
  }
});

// const busqueda = document.querySelector("#empleos-search-input");

// busqueda.addEventListener("input", () => {
//   const terminoBusqueda = busqueda.value.trim().toLowerCase();

//   //Obtener la NodeList de todos los h3 con clase 'titulo-vacante'
//   const h3TituloVacante = document.querySelectorAll(".titulo-vacante");

//   //Recorrer cada elemento de la NodeList
//   h3TituloVacante.forEach((h3) => {
//     //Lee el texto visible del h3 y se pasa a minúsculas para la comparación
//     const textoTitulo = h3.innerText.toLowerCase();
//     //Includes devuelve true si el termino de búsqueda aparace en textoTitulo
//     const isShown = textoTitulo.includes(terminoBusqueda);

//     //Closest sube por el DOM desde h3 hasta encontrar el ancestro .job-listing-card
//     h3.closest(".job-listing-card").classList.toggle("is-hidden", !isShown);
//   });
// });

const empleosSearchForm = document.querySelector("#empleos-search-form");

empleosSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submit");
});
