import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "IU | Healthcare | Home";
  }, []);

  return <div>HomePage</div>;
};
export default HomePage;
