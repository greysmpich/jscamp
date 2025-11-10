import { useId } from "react";
// import { useState } from "react";

export function SearchFormSection({ onTextFilter, onSearch }) {
    const inputSearchId = useId();
    const searchTechId = useId();
    const searchLocationId = useId();
    const searchExperienceId = useId();
    const searchContractId = useId();

    // const [focusState, setFocusState] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const filters = {
            searchTerm: formData.get(inputSearchId),
            technology: formData.get(searchTechId),
            location: formData.get(searchLocationId),
            experience: formData.get(searchExperienceId),
            contract: formData.get(searchContractId),
        }

        onSearch(filters);

    }

    const handleTextChange = (event) => {
        const text = event.target.value;
        onTextFilter(text);
    }
    return (
        <section>

            <h1>Encuentra tu próximo trabajo</h1>

            <p>Explora miles de oportunidades en el sector tecnológico</p>

            <form onSubmit={handleSubmit} role="search" id="empleos-search-form">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>

                    <input type="text" name={inputSearchId} id={inputSearchId}
                        placeholder="Buscar empleos por título, habilidad o empresa" onChange={handleTextChange}
                        // onFocus={() => setFocusState('inputSearchId')}
                        // onBlur={() => setFocusState(null)}
                        // style={{
                        //     borderColor: focusState === 'search' ? '#4f46e5' : '#d1d5db',
                        //     outline: focusState === 'search' ? '2px solid #4f46e5' : 'none',
                        // }}
                    />

                    <button type="submit">Buscar</button>
                </div>

                <div className="filters">
                    <select name={searchTechId} id="filter-technology">
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

                    <select name={searchLocationId} id="filter-location">
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

                    <select name={searchContractId} id="filter-contract">
                        <option value="">Tipo de contrato</option>
                        <option value="tiempo_completo">Tiempo completo</option>
                        <option value="freelance">Freelance</option>
                        <option value="practicas">Beca / Prácticas</option>
                    </select>

                    <select name={searchExperienceId} id="filter-experience">
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