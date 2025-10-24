import { state, RESULTS_PER_PAGE } from './config.js';
// import { goToPage } from './fetch-data.js';

export function renderPagination() {
const totalPages = Math.ceil(state.filteredJobs.length / RESULTS_PER_PAGE);
const paginationContainer = document.querySelector('.pagination');

// Limpiar la paginación existente
paginationContainer.innerHTML = ''

// Crear un botón por cada página
for (let i = 1; i <= totalPages; i++) {
  const button = document.createElement('button')
  button.textContent = i
  button.className = 'page-item'

  // Si es la página actual, añadir clase activa
  if (i === state.currentPage) {
    button.classList.add('active')
  }

  paginationContainer.appendChild(button)
}

}


