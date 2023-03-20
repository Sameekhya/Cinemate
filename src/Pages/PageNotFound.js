import NotFound_Img from "../assets/OIP.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `PageNotFound /Cinemate`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-3xl font-bold text-gray-800 dark:text-white">
            404, oops .Page Not Found...
          </p>
          <div className="max-w-xl">
            <img
              className="rounded"
              src={NotFound_Img}
              alt="404 Page Not Found"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center my-10">
          <Link to="/">
            <button className="w-64 text-xl hover:bg-white text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
