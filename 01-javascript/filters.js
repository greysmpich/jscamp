const filterList = document.querySelector(".filters");

filterList.addEventListener("change", () => {
  const jobs = document.querySelectorAll(".job-listing-card");

  const tecnologia = document.querySelector("#filter-technology").value;
  const ubicacion = document.querySelector("#filter-location").value;
  const experiencia = document.querySelector("#filter-experience").value;

  jobs.forEach((job) => {
    const jobTecList = job.getAttribute('data-tecnologia');
    const jobUbic = job.getAttribute('data-ubicacion');
    const jobExp = job.getAttribute('data-experiencia');
console.log(jobTecList)
    const isShown =
      (tecnologia === "" || jobTecList === tecnologia || job.includes('tecnologia')) &&
      (ubicacion === "" || jobUbic === ubicacion) &&
      (experiencia === "" || jobExp === experiencia)

    job.classList.toggle("is-hidden", !isShown);
  });
});
