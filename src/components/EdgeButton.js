const EdgeButton = ({ handleClick, title }) => {
  return (
    <li>
      <div
        className={`pagination-item edge ${title}`}
        title={title}
        onClick={handleClick}
      >
        <span></span>
      </div>
    </li>
  );
};

export default EdgeButton;
