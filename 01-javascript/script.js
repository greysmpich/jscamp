// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

// const filterList = document.querySelector(".filters");

// filterList.addEventListener("change", function (event) {
//   const filter = event.target;

//   if (filter) {
//   console.log(filter.value);
// }

// });

document.addEventListener("DOMContentLoaded", () => {
    const filterList = document.querySelector(".filters");
const jobs = document.querySelectorAll(".resultado");

filterList.addEventListener("change", () => {
  const tecnologia = document.querySelector("#filter-technology").value;
  const ubicacion = document.querySelector("#filter-location").value;
  const experiencia = document.querySelector("#filter-experience").value;

  jobs.forEach(job => {
    const jobTecList = job.dataset.tecnologia.toLowerCase().split(",");
    const jobUbic = job.dataset.ubicacion.toLowerCase();
    const jobExp = job.dataset.nivel_experiencia.toLowerCase();

    const matches = 
    (tecnologia === "" || jobTecList.includes(tecnologia)) &&
    (ubicacion === "" || jobUbic === ubicacion) &&
    (experiencia === "" || jobExp === experiencia);

    job.style.display = matches ? "flex" : "none";

  })




});
})


