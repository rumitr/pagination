import React, { useState, useEffect } from "react";

const Pagination = ({ defaultPageSize = 10, data = [], Component }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const pageCount = Math.ceil(data.length / pageSize);
  const startCount = pageSize * (currentPage - 1);
  const currentPagedata = data.slice(startCount, startCount + pageSize);
  const hasPrev = currentPage === 1 ? false : true;
  const hasNext = currentPage === pageCount ? false : true;
  console.log(
    { pageCount, startCount, currentPagedata, pageSize },
    startCount + pageSize
  );

  return (
    <>
      <div
        className="pagination-container"
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="first">
          <button disabled={!hasPrev} onClick={(e) => setCurrentPage(1)}>
            {"<<"}
          </button>
        </div>
        <div className="prev">
          <button
            disabled={!hasPrev}
            onClick={(e) => setCurrentPage((prev) => prev - 1)}
          >
            {"<"}
          </button>
        </div>
        <div className="current">
          <input
            type="text"
            onChange={(e) => setCurrentPage(e.target.value)}
            value={currentPage}
          />
        </div>
        <div className="next">
          <button
            disabled={!hasNext}
            onClick={(e) => setCurrentPage((prev) => prev + 1)}
          >
            {">"}
          </button>
        </div>
        <div className="last">
          <button
            disabled={!hasNext}
            onClick={(e) => setCurrentPage(pageCount)}
          >
            {">>"}
          </button>
        </div>
        <div className="page-count">
          <input
            type="text"
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
          />
        </div>
      </div>
      {currentPagedata.map((item) => (
        <Component key={item.id} user={item} />
      ))}
    </>
  );
};

export default Pagination;
