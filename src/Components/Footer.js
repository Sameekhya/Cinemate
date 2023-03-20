import React from "react";


const Footer = () => {
  return (
    <footer className=" bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Cinemate™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/"
              target={"_blank"}
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target={"_blank"}
              className="mr-4 hover:underline md:mr-6"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="#https://www.youtube.com/"
              target={"_blank"}
              className="hover:underline"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
