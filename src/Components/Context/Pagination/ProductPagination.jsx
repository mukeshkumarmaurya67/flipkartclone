import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("http://localhost:10001/product")
      .then((r) => r.json())
      .then((sx) => {
        setData(sx);
        setTotalPages(Math.ceil(sx.length / 10));
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h1>Paginated Data</h1>
      <p>Loading...</p>
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
        >
          Next
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <div key={index}>
            <p>{index + 1}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPagination;
