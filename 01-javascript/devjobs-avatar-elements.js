class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" }); // Creamos Shadow DOM para encapsular el componente
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`
  }

  render() {
    // 1. Leemos los atributos con valores por defecto
    const username = this.getAttribute("username") ?? "midudev";
    const service = this.getAttribute("service") ?? "github";
    const size = this.getAttribute("size") ?? "40";

    // 2. Generamos la URL usando nuestro método auxiliar

    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
    <style>
      img {
    border-radius: 50%;
    max-width: 40px;
    width: 40px;
    height: 40px;
  }
    </style>

    <img src="${url}" alt="Avatar de ${username}" title="Avatar de ${username}" class="avatar">
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("dev-jobs-avatar", DevJobsAvatar);
