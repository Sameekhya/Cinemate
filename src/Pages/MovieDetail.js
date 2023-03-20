import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/backup_image.jpg";
import useTitle from "../hooks/useTitle";
export const MovieDetail = () => {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(params);
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=78bb59e16815dde2c016440f25afaafa`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    }
    fetchMovies();
  }, []);

  const PageTitle = useTitle(data.title);

  return (
    <main>
      <section className="flex flex-row  justify-around space-x-10 p-5">
        <div className="max-w-sm">
          <img
            className="rounded"
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                : Backup
            }
            alt=""
          />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-5xl text-center lg:text-left font-bold text-gray-500">
            {data.title}
          </h1>

          <p className="text-gray-400 my-4">{data.overview}</p>

          <p className="mt-5 mb-5 flex flex-wrap gap-5">
            {data.genres &&
              data.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="mr-2 border border-gray-300 rounded dark:bordergray-6 00 p-2"
                >
                  {genre.name}
                </span>
              ))}
          </p>

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {data.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900  dark:text-white"
            >
              {data.vote_count}reviews
            </a>
          </div>

          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">Runtime: </span>
            <span>{data.runtime}</span>
          </p>

          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">Status: </span>
            <span>{data.status}</span>
          </p>
          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">ReleasedDate : </span>
            <span>{data.release_date}</span>
          </p>
          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">Original_language : </span>
            <span>{data.original_language}</span>
          </p>
          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">Budget: </span>
            <span>{data.budget}</span>
          </p>

          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">Revenue: </span>
            <span>{data.revenue}</span>
          </p>

          <p className="my-2 mb-2">
            <span className="mr-2 font-bold">IMDB Id: </span>
            <a
              className="underline"
              href={`https://www.imdb.com/title/${data.imdb_id}/`}
              target="_blank"
              rel="noreferrer"
            >
              {data.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
