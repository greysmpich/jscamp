import styles from './Pagination.module.css';
export function Pagination({ currentPage = 1, totalPages = 4, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    // (Elemento _ se coloca este signo para indicar que se ignorará el parámetro, índice i)

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const stylePrevButton = isFirstPage ? { pointerEvents: 'none', opacity: 0.5 } : {};
    const styleNextButton = isLastPage ? { pointerEvents: 'none', opacity: 0.5 } : {};

    const handlePrevClick = (event) => {
        event.preventDefault()
        if (!isFirstPage) {
            onPageChange(currentPage - 1)
        }
    }

    const handleNextClick = (event) => {
        event.preventDefault()
        if (!isLastPage) {
            onPageChange(currentPage + 1)
        }
    }


    const handleChangePage = (event, page) => {
        event.preventDefault()
        if (page !== currentPage) {
            onPageChange(page)
        }
    }
        return (
            <nav aria-label="Navegación de páginas" className={styles.pagination}>
                <ul>
                    <li className={styles.pageItem} style={stylePrevButton} onClick={handlePrevClick}><a className={styles.pageLink} href="#" ><span>&laquo;</span></a></li>
                    {pages.map(page => (
                        <li key={page} 
                        className={`${styles.pageItem} ${page === currentPage ? styles.pageItemActive : ''}`} 
                        onClick={(event) => handleChangePage(event, page)}
                        >
                            <a className={styles.pageLink} href="#">{page}</a>
                        </li>
                    ))}
                    <li className={styles.pageItem} style={styleNextButton} onClick={handleNextClick}><a className={styles.pageLink} href="#"><span>&raquo;</span></a></li>
                </ul>
            </nav>
        )
    }