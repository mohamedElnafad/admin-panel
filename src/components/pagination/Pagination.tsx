import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    let pages = [];
    const visiblePages = 7;

    if (totalPages <= visiblePages + 4) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push('...');

      let start = Math.max(4, currentPage - 2);
      let end = Math.min(totalPages - 1, currentPage + 2);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 3) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className='d-flex justify-content-center mt-4'>
      <nav>
        <ul className='pagination' style={{ direction: 'rtl' }}>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className='page-link'
              onClick={() => onPageChange(currentPage - 1)}
            >
              «
            </button>
          </li>
          {generatePageNumbers().map((num, index) => (
            <li
              key={index}
              className={`page-item ${num === currentPage ? 'active' : ''}`}
            >
              {num === '...' ? (
                <span className='page-link'>...</span>
              ) : (
                <button
                  className='page-link'
                  onClick={() => onPageChange(num as number)}
                >
                  {num}
                </button>
              )}
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? 'disabled' : ''
            }`}
          >
            <button
              className='page-link'
              onClick={() => onPageChange(currentPage + 1)}
            >
              »
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
