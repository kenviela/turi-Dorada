import { useState, useEffect } from "react";

function buildUrlWithQueryParams(baseUrl, paramsObj) {
  const queryParams = new URLSearchParams(paramsObj).toString();
  const url = new URL(baseUrl);
  url.search = queryParams;
  return url.toString();
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //const [controller, setController] = useState(null);
  const makeRequest = async ({ data, params = {}, method = "GET" }) => {
    setLoading(true);
    try {
      const response = await fetch(buildUrlWithQueryParams(url, params), {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setData(await response.json());
      } else {
        setError(await response.json());
      }
    } catch (error) {
      console.log(error);
      setError(error);
      console.log("se genero un error");
    } finally {
      setLoading(false);
    }
  };
  /*
  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request");
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Cancelled Request");
    }
  };*/

  return { data, loading, error, makeRequest };
}

export default useFetch;
