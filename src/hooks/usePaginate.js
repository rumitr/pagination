import { useState } from "react";
import "./paginate.css";
const defaultPageConfig = {
  defaultPageSize: 10,
  currentPage: 1,
  pageSizeOptions: [10, 20, 30, 50, 100],
};
const usePaginate = (data, config = {}) => {
  const pageConfig = { ...defaultPageConfig, ...config };
  const [currentPage, setCurrentPage] = useState(pageConfig.currentPage);
  const [pageSize, setPageSize] = useState(pageConfig.defaultPageSize);
  const startCount = pageSize * (currentPage - 1);
  const currentPagedata = data.slice(startCount, startCount + pageSize);
  return {
    Wrapper: () => (
      <Paginate
        config={pageConfig}
        data={data}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    ),
    currentPagedata,
  };
};

const Paginate = ({
  setCurrentPage,
  currentPage,
  pageSize,
  setPageSize,
  config,
  data,
}) => {
  const pageSizeOptions = config.pageSizeOptions;
  const pageCount = Math.ceil(data.length / pageSize);
  const hasPrev = currentPage === 1 ? false : true;
  const hasNext = currentPage === pageCount ? false : true;

  const reset = () => {
    setCurrentPage(1);
  };
  const validateInteger = (value) =>
    isNaN(parseInt(value)) ? null : parseInt(value);

  const handleGoTo = (e) => {
    const number = validateInteger(e.target.value);
    if (number) {
      const pageNumber =
        number < 1 ? 1 : number > pageCount ? pageCount : number;
      setCurrentPage(pageNumber);
    }
  };

  const handlePageChange = (pageCount) => {
    setCurrentPage(pageCount);
  };

  const handlePageSizeChange = (e) => {
    reset();
    setPageSize(parseInt(e.target.value));
  };

  return (
    <div>
      <div className="pagination-wrapper">
        <ul className="pagination-list">
          <li
            className={
              !hasPrev ? "pagination-item disabled" : "pagination-item"
            }
            title="First"
          >
            <div
              onClick={(e) => {
                if (hasPrev) handlePageChange(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left"
              >
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </li>
          <li
            className={
              !hasPrev ? "pagination-item disabled" : "pagination-item"
            }
            title="Prev"
          >
            <div
              onClick={(e) => {
                console.log(!hasPrev);
                if (hasPrev) setCurrentPage((prev) => prev - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-left"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </li>
          <li className="is-active pagination-item">
            <div>
              {currentPage}/{pageCount}
            </div>
          </li>

          <li
            className={
              !hasNext ? "pagination-item disabled" : "pagination-item"
            }
            title="Next"
          >
            <div
              onClick={(e) => {
                if (hasNext) setCurrentPage((prev) => prev + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </li>
          <li
            className={
              !hasNext ? "pagination-item disabled" : "pagination-item"
            }
            title="Last"
          >
            <div
              onClick={(e) => {
                if (hasNext) handlePageChange(pageCount);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </li>
        </ul>
        <div>
          <input
            type="number"
            placeholder="go to page"
            value={currentPage}
            onChange={handleGoTo}
          />
        </div>
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option disabled value="">
            items per page
          </option>
          {pageSizeOptions
            .filter((options) => options < pageCount * pageSize)
            .map((pageSize, index) => (
              <option key={index} value={pageSize}>
                {pageSize}/page
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
export default usePaginate;
