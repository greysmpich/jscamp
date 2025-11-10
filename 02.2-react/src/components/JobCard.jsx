import { useState } from "react";

export function JobCard({ job }) {


    const [isAplied, setIsApplied] = useState(false);
    const handleAplicar = () => {
        setIsApplied(!isAplied)
    }

    const text = isAplied ? 'Aplicado' : 'Aplicar';
    const buttonClass = isAplied ? 'is-applied' : '';

    return (
        <article className="job-listing-card"
                    data-ubicacion={job.data.ubicacion}
                    data-experiencia={job.data.experiencia}
                    data-tecnologia={job.data.tecnologia}
                    data-contrato={job.data.contrato}
                >
                    <div>
                        <h3 className="titulo-vacante">
                            {job.titulo}
                        </h3>
                        <span> {job.empresa} - {job.ubicacion}</span>
                        <p>{job.descripcion}</p>
                    </div>
                    <div>
                        <button 
                        disabled={isAplied}
                        className={`button-apply-job ${buttonClass}`}
                            onClick={handleAplicar}
                        >
                            {text}</button>
                    </div>
                </article>
            )
}