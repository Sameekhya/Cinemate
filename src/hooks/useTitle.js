import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}/Cinemate`;
  });

  return <div></div>;
};

export default useTitle;
