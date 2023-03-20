import React from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import useTitle from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParam] = useSearchParams();

  const queryTerm = searchParam.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  const PageTitle = useTitle(`Search Result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text=3xl text-gray-white dark:text-white">
          {movies.length === 0
            ? `No result found for "${queryTerm}"`
            : `Result for "${queryTerm}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};
