import { useEffect } from "react";
import "@/pages/NotFound/notfound.css";

const NotFound = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="ev">
        <title>PAGE NOT FOUND</title>

        <div className="parent">
          <header>
            <div className="n404">
              <div className="n404-wr"></div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default NotFound;
