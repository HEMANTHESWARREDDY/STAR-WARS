import React from 'react';
import './Pagination.css';

const Pagination = ({ onNextPage, onPrevPage }) => {
    return (
        <div className="pagination">
            <button onClick={onPrevPage}>Previous</button>
            <button onClick={onNextPage}>Next</button>
        </div>
    );
};

export default Pagination;
