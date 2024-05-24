import { useEffect } from "react";
import { Link } from "react-router-dom";

import "../../styles/error/NotFoundPage.css";

const NotFoundPage = () => {
  // Change the title of the website based on specific page
  useEffect(() => {
    document.title = "IU | Healthcare | Not Found";
  }, []);

  return (
    <>
      <div className="error-box">
        <h1>404 Not Found</h1>
        <Link className="link-to-home" to="/">
          Go back to Home
        </Link>
      </div>
    </>
  );
};
export default NotFoundPage;
