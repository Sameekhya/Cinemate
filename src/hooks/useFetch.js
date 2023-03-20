import React, { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=78bb59e16815dde2c016440f25afaafa&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.results);
    }
    fetchMovies();
  }, [url]);
  return { data };
};

export default useFetch;
