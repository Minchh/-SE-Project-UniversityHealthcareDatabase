import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NewsCard from "./NewsCard.jsx";

import homepageHero from "../../assets/imgs/homepage-hero.png";
import news1 from "../../assets/imgs/news1.png";
import news2 from "../../assets/imgs/news2.png";
import tempAva from "../../assets/imgs/tempAva.jpg";

import "../../styles/home/UserHomePage.css";

const UserHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "IU | Healthcare | Home";
  }, []);

  const news1Title = "In Conversation: Is intermittent fasting actually bad for your heart?";
  const news1Para =
    "The proponents of intermittent fasting often cite benefits such as weight loss, improved blood sugar, and reduced cholesterol. And there is some scientific evidence to support these claims...";

  const news2Titile = "2023 in medicine: Artificial sweeteners, colon cancer, and male birth control";
  const news2Para =
    "2023 has witnessed no shortage of medical firsts and breakthroughs but has also seen many alarming headlines. What were some of these intriguing studies and worrying trends?";

  return (
    <main>
      <nav className="home-nav">
        <a className="home-nav-main" href="" onClick={() => navigate("/")}>
          Group2.io
        </a>

        <img className="home-user-pic" src={tempAva} alt={`${tempAva}`} />

        <div className="home-sub-menu-wrap">
          <div className="home-sub-menu">
            <div className="user-info">
              <img src={tempAva} alt={`${tempAva}`} />
              <div className="user-info-id"></div>
            </div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </nav>

      <section className="home-hero">
        <h1 className="home-hero-title">
          International University Student <span>Healthcare</span> Site
        </h1>

        <div className="home-hero-img">
          <img src={homepageHero} alt="Doctors Hero Image" />
        </div>
      </section>

      <section className="home-news">
        <NewsCard img={news1} title={news1Title} content={news1Para} />
        <NewsCard img={news2} title={news2Titile} content={news2Para} />
      </section>
    </main>
  );
};
export default UserHomePage;
