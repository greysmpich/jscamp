import { state, RESULTS_PER_PAGE } from './config.js';
import { renderPagination } from './pagination.js';

const container = document.querySelector(".jobs-listings");

fetch("./data.json") // fetch es asíncrono / obtenemos el archivo data.json
  .then((response) => {
    // convertimos la respuesta a JSON
    return response.json();
  })
  .then((jobs) => {

    state.jobs = jobs;
    state.filteredJobs = jobs;

    renderJobs();
    renderPagination();
  });

  export function renderJobs(){
    container.innerHTML = '';

    const startIndex = (state.currentPage - 1) * RESULTS_PER_PAGE;
    const endIndex = startIndex + RESULTS_PER_PAGE;

    const jobsToShow = state.filteredJobs.slice(startIndex, endIndex);

     // recorremos los datos y los mostramos en el DOM
    jobsToShow.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";

      const wrapper = document.createElement("div");

      const title = document.createElement("h3");
      title.textContent = job.titulo;
      title.className = 'titulo-vacante';

      const meta = document.createElement("span");
      meta.textContent = `${job.empresa} | ${job.ubicacion}`;

      const description = document.createElement("p");
      description.textContent = job.descripcion;

      const buttonContainer = document.createElement("div");

      const button = document.createElement("button");
      button.className = "button-apply-job";
      button.setAttribute("type", "submit");
      button.textContent = "Aplicar";

      article.dataset.experiencia = job.data.experiencia;
      article.dataset.tecnologia = job.data.tecnologia;
      article.dataset.ubicacion = job.data.ubicacion;
      // article.innerHTML = `
      //       <div>
      //            <h3>${job.titulo}</h3>
      //           <span>${job.empresa}</span> | <span>${job.ubicacion}</span>
      //           <p>${job.descripcion}</p>
      //       </div>
      //       <div>
      //            <button type="submit" class="button-apply-job">Aplicar</button>
      //       </div>
      //         `;
      wrapper.append(title, meta, description);
      buttonContainer.append(button);
      article.append(wrapper, buttonContainer);
      container.appendChild(article);
    });
  }

  
