import { state } from './config.js'

state.count++

console.log(state);


const filterList = document.querySelector(".filters");

filterList.addEventListener("change", () => {
  const jobs = document.querySelectorAll(".job-listing-card");

  const tecnologia = document.querySelector("#filter-technology").value;
  console.log(tecnologia);
  
  const ubicacion = document.querySelector("#filter-location").value;
  const experiencia = document.querySelector("#filter-experience").value;

  jobs.forEach((job) => {
    const jobTecList = job.getAttribute('data-tecnologia').split(',');
    const jobUbic = job.getAttribute('data-ubicacion');
    const jobExp = job.getAttribute('data-experiencia');

    console.log(jobTecList);
    

    const isShown =
      (tecnologia === "" || jobTecList.includes(tecnologia) ) &&
      (ubicacion === "" || jobUbic === ubicacion) &&
      (experiencia === "" || jobExp === experiencia)

    job.classList.toggle("is-hidden", !isShown);
  });
});
