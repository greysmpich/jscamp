const container = document.querySelector('.jobs-listings')

fetch("./data.json")  /* fetch es asíncrono */
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      article.dataset.experiencia = job.data.experiencia;
      article.dataset.tecnologia = job.data.tecnologia;
      article.dataset.ubicacion = job.data.ubicacion;
      article.innerHTML = `  
            <div>
                 <h3>${job.titulo}</h3>
                <span>${job.empresa}</span> | <span>${job.ubicacion}</span>
                <p>${job.descripcion}</p>
            </div>
            <div>
                 <button type="submit" class="button-apply-job">Aplicar</button>
            </div>
              `;
      container.appendChild(article)
    });
  });
