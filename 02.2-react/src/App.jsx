import { useState } from 'react';

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Pagination } from './components/Pagination.jsx';
import { SearchFormSection } from './components/SearchFormSection.jsx';
import { JobListings } from './components/JobListings.jsx';

import jobs from './data.json';


console.log(jobs);

const resultPerPages = 4;

function App() {
    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experience: '',
        contract: '',
    });
    const [textToFilter, setTextToFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1)

    const jobsFilteredByFilter = jobs.filter(job => {
        return (filters.technology === '' || job.data.tecnologia === filters.technology) &&
            (filters.location === '' || job.data.ubicacion === filters.location) &&
            (filters.experience === '' || job.data.experiencia === filters.experience) &&
            (filters.contract === '' || job.contrato === filters.contract);
    })

    const jobsWithTextFilter = textToFilter === '' ? jobsFilteredByFilter : jobsFilteredByFilter.filter((job) => {
        return job.titulo.toLocaleLowerCase().includes(textToFilter.toLocaleLowerCase());
    })

    const totalPages = Math.ceil(jobsWithTextFilter.length / resultPerPages);

    const pageResults = jobsWithTextFilter.slice(
        (currentPage - 1) * resultPerPages, //Página 1 -> 0, Página 2 -> 5, Página 3 -> 10
        currentPage * resultPerPages //Página 1 -> 5, Página 2 -> 10, Página 3 -> 15
    );



    const handlePageChange = (page) => {
        console.log('Página cambiada a:', page);
        setCurrentPage(page);
    }

    const handleSearch = (filters) => {
        setFilters(filters);
        setCurrentPage(1);
    }

    const handleTextFilter = (newTextToFilter) => {
        setTextToFilter(newTextToFilter);
        currentPage(1);
    }
    return (
        <>
            <Header />

            <main>

                <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

                <section>
                    <JobListings jobs={pageResults} />
                </section>

                <section>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </section>
            </main>

            <Footer />
        </>
    )
}

export default App
