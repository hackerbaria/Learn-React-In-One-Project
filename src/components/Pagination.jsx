import "../css/Pagination.css";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
      const maxVisible = 5;
      const pages = [];
  
      let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let end = start + maxVisible - 1;
  
      if (end > totalPages) {
        end = totalPages;
        start = Math.max(1, end - maxVisible + 1);
      }
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
  
      return pages;
    };
  
    const pages = getPageNumbers();
  
    return (
      <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          ⬅ Prev
        </button>
  
        {pages[0] > 1 && (
          <>
            <button onClick={() => onPageChange(1)}>1</button>
            {pages[0] > 2 && <span>...</span>}
          </>
        )}
  
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
  
        {pages[pages.length - 1] < totalPages && (
          <>
            {pages[pages.length - 1] < totalPages - 1 && <span>...</span>}
            <button onClick={() => onPageChange(totalPages)}>{totalPages}</button>
          </>
        )}
  
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next ➡
        </button>
      </div>
    );
  };
  
  export default Pagination;