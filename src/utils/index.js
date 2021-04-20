export const getNodeList = (page, count) => {
  // there are 10 page links shown at any time ,unless there are less than 10 total pages
  // the active link (current page) is in the 6th position
  //ellipsis will be shown if first page or last page are not visible
  let startNode, endNode;
  let NodeList = [];
  if (page > 6) NodeList.push("ellipsis");
  if (count <= 10) {
    startNode = 1;
    endNode = count;
  } else {
    if (page <= 6) {
      startNode = 1;
      endNode = 10;
    } else if (page + 4 >= count) {
      startNode = count - 9;
      endNode = count;
    } else {
      startNode = page - 5;
      endNode = page + 4;
    }
  }

  NodeList.push(...pageRange(startNode, endNode));
  if (page + 4 < count) NodeList.push("ellipsis");
  return NodeList;
};

export const pageRange = (start, end) =>
  Array.from({ length: end - start }).map((val, index) => index + start);

export const validateInteger = (value) =>
  isNaN(parseInt(value)) ? null : parseInt(value);
