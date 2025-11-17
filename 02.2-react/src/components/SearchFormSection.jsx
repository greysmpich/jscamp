import { useId, useState } from "react";

let timeoutId = null;

const useSearchForm = ({ idTechnology, idLocation, idExperience, idContract, idSearchTerm, onSearch, onTextFilter }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        if (event.target.name === idSearchTerm) {
            return
        }

        const filters = {
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experience: formData.get(idExperience),
            contract: formData.get(idContract),
        }

        onSearch(filters)

    }

    const handleTextChange = (event) => {
        const text = event.target.value;
        setSearchTerm(text);

        //Debounce: Cancelar el timeout anterior
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            onTextFilter(text);
        }, 500); // Esperar 500ms antes de llamar a onTextFilter


    }

    return {
        searchTerm,
        handleSubmit,
        handleTextChange
    }
}

export function SearchFormSection({ onTextFilter, onSearch }) {
    const idSearchTerm = useId();
    const idTechnology = useId();
    const idLocation = useId();
    const idExperience = useId();
    const idContract = useId();

    const {
        handleSubmit,
        handleTextChange
    } = useSearchForm({ idTechnology, idLocation, idExperience, idContract, idSearchTerm, onSearch, onTextFilter })

    return (
        <section>

            <h1>Encuentra tu próximo trabajo</h1>

            <p>Explora miles de oportunidades en el sector tecnológico</p>

            <form onChange={handleSubmit} role="search" id="empleos-search-form">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>

                    <input type="text" name={idSearchTerm} id={idSearchTerm}
                        placeholder="Buscar empleos por título, habilidad o empresa" onChange={handleTextChange}
                    // onFocus={() => setFocusState('idSearchTerm')}
                    // onBlur={() => setFocusState(null)}
                    // style={{
                    //     borderColor: focusState === 'search' ? '#4f46e5' : '#d1d5db',
                    //     outline: focusState === 'search' ? '2px solid #4f46e5' : 'none',
                    // }}
                    />

                    <button type="submit">Buscar</button>
                </div>

                <div className="filters">
                    <select name={idTechnology} id="filter-technology">
                        <option value="">Tecnología</option>
                        <option value="javascript">JavaScript</option>
                        <option value="react">React</option>
                        <option value="typescript">TypeScript</option>
                        <option value="nodejs">Node.js</option>
                        <hr />
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <hr />
                        <option value="mobile">Mobile</option>
                    </select>

                    <select name={idLocation} id="filter-location">
                        <option value="">Ubicación</option>
                        <option value="remoto">Remoto</option>
                        <option value="cdmx">Ciudad de México</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="monterrey">Monterrey</option>
                        <option value="bogota">Bogotá</option>
                        <option value="lima">Lima</option>
                        <option value="santiago">Santiago</option>
                        <option value="barcelona">Barcelona</option>
                        <option value="madrid">Madrid</option>
                        <option value="valencia">Valencia</option>
                    </select>

                    <select name={idContract} id="filter-contract">
                        <option value="">Tipo de contrato</option>
                        <option value="tiempo_completo">Tiempo completo</option>
                        <option value="freelance">Freelance</option>
                        <option value="practicas">Beca / Prácticas</option>
                    </select>

                    <select name={idExperience} id="filter-experience">
                        <option value="">Nivel de experiencia</option>
                        <option value="junior">Junior</option>
                        <option value="mid-level">Mid-level</option>
                        <option value="senior">Senior</option>
                        <option value="lead">Lead</option>
                    </select>
                </div>

            </form>
        </section>
    )
}