import React, { useState, useCallback, useEffect } from "react";
import useAsync from "../hooks/useAsync";
import Paginate from "./Paginate";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import { validateInteger } from "../utils";

const UserList = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(14);
  const [pageSize, setPageSize] = useState(3);

  const pageSizeOptions = [3, 6, 9];

  const getUsers = useCallback(
    (page, size) => {
      return fetch(
        `https://fake-api.netlify.app/api/users?page=${page}&size=${size}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (page != res.page) setPage(parseInt(res.page));
          if (count != res.total) setCount(parseInt(res.total));
          return res.data;
        });
    },
    [count]
  );
  const { execute, status, value: users, error } = useAsync(getUsers, false);

  useEffect(() => {
    execute(page, pageSize);
  }, [execute, page, pageSize]);

  const handlePageChange = (value) => {
    setPage(value);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePageSizeChange = (event) => {
    setPage(1);
    setPageSize(event.target.value);
  };

  const handleGoTo = (e) => {
    const number = validateInteger(e.target.value);
    if (status !== "pending" && number) {
      const pageNumber = number < 1 ? 1 : number > count ? count : number;
      setPage(pageNumber);
    }
  };

  return (
    <div>
      <div className="pagination-container">
        <Paginate
          count={count}
          page={page}
          handlePageChange={handlePageChange}
          pageSize={pageSize}
          pageSizeOptions={pageSizeOptions}
          handlePageSizeChange={handlePageSizeChange}
          handleGoTo={handleGoTo}
          loading={status === "pending"}
        />
      </div>
      <div className="user-grid">
        {status === "pending" && <Spinner />}
        {status === "error" && (
          <div>
            `${error}... <button>Reset</button>`
          </div>
        )}
        {status === "success" &&
          users.map((user) => <UserItem user={user} key={user.id} />)}
      </div>
    </div>
  );
};

export default UserList;
