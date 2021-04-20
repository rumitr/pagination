import { useState, useCallback, useEffect } from "react";

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("pending");
  const [value, setValue] = useState([]);
  const [error, setError] = useState(null);

  // const reset = () => {
  //   setStatus("idle");
  //   setValue([]);
  //   setError(null);
  // };

  const execute = useCallback(
    (...params) => {
      setStatus("pending");
      setValue([]);
      setError(null);

      return asyncFunction(...params)
        .then((response) => {
          setValue(response);
          setStatus("success");
        })
        .catch((error) => {
          setError(error);
          setStatus("error");
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default useAsync;
