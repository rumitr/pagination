import EdgeButton from "./EdgeButton";
import PageRange from "./PageRange";
import GoToPage from "./GoToPage";
import PageSizeSelector from "./PageSizeSelector";

import "./paginate.css";

const Paginate = ({
  count,
  page,
  handlePageChange,
  handlePageSizeChange,
  pageSize,
  pageSizeOptions,
  handlePrev,
  handleNext,
  handleGoTo,
  loading,
}) => {
  const hasPrev = page === 1 ? false : true;
  const hasNext = page === count ? false : true;

  return (
    <div
      className={loading ? "loading pagination-wrapper " : "pagination-wrapper"}
    >
      <nav>
        <ul class="pagination">
          <EdgeButton
            title="First"
            handleClick={(e) => {
              if (!loading && hasPrev) handlePageChange(1);
            }}
          />
          <PageRange
            handlePageChange={handlePageChange}
            page={page}
            count={count}
            loading={loading}
          />
          <EdgeButton
            title="Last"
            handleClick={(e) => {
              if (!loading && hasNext) handlePageChange(count);
            }}
          />
        </ul>
      </nav>
      <GoToPage page={page} handleGoTo={handleGoTo} count={count} />
      <PageSizeSelector
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        handlePageSizeChange={handlePageSizeChange}
        count={count}
      />
    </div>
  );
};

export default Paginate;
