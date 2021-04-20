const PageItem = ({ index, handlePageChange, isCurrent, loading }) => (
  <li>
    <div
      style={{}}
      className={isCurrent ? "current pagination-item" : "pagination-item"}
      onClick={(e) => !loading && handlePageChange(index)}
    >
      {index}
    </div>
  </li>
);

export default PageItem;
