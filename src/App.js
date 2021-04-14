import { useCallback } from "react";
import "./App.css";
import WrapperListComponent from "./components/list/WrapperListComponent";
import ListItem from "./components/list/ListItem";
import WrapperTable from "./components/table/WrapperTable";
import ListTableItem from "./components/table/ListTableItem";
import useAsync from "./hooks/useAsync";
import usePaginate from "./hooks/usePaginate";

const pageOptions = {
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20],
};

function App() {
  const getUsers = useCallback(() => {
    return fetch("https://fake-api.netlify.app/api/users").then((res) =>
      res.json()
    );
  }, []);
  const { status, value: users, error } = useAsync(getUsers);
  const { Wrapper, currentPagedata } = usePaginate(users, pageOptions);
  return (
    <div className="App">
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "pending" && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {status === "success" && (
        <>
          <Wrapper />
          <WrapperListComponent>
            {currentPagedata.map((data, index) => (
              <ListItem key={index} user={data} />
            ))}
          </WrapperListComponent>
          <WrapperTable>
            {currentPagedata.map((data, index) => (
              <ListTableItem key={index} user={data} />
            ))}
          </WrapperTable>
          <Wrapper />
        </>
      )}
      {status === "error" && <div>{error}</div>}
    </div>
  );
}

export default App;
