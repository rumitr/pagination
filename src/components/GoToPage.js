const GoToPage = ({ page, handleGoTo, count }) => {
  return (
    <div>
      <input
        type="number"
        placeholder="go to page"
        value={page}
        onChange={handleGoTo}
      />
      <span style={{ fontWeight: "bold" }}> / </span>
      {count}
    </div>
  );
};

export default GoToPage;
