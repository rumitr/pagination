import PageItem from "./PageItem";
import Ellipsis from "./Ellipsis";
import { getNodeList } from "../utils";

const PageRange = ({ handlePageChange, page, count }) => {
  const NodeList = getNodeList(page, count);
  return (
    <>
      {NodeList.map((node) =>
        node === "ellipsis" ? (
          <Ellipsis />
        ) : (
          <PageItem
            index={node}
            key={node}
            handlePageChange={handlePageChange}
            isCurrent={page === node}
          />
        )
      )}
    </>
  );
};

export default PageRange;
