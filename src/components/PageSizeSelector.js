const PageSizeSelector = ({
  pageSize,
  handlePageSizeChange,
  pageSizeOptions,
  count,
}) => {
  return (
    <select value={pageSize} onChange={handlePageSizeChange}>
      <option disabled value="">
        items per page
      </option>
      {pageSizeOptions
        .filter((options) => options < count * pageSize)
        .map((pageSize, index) => (
          <option key={index} value={pageSize}>
            {pageSize}/page
          </option>
        ))}
    </select>
  );
};

export default PageSizeSelector;
