import PropTypes from "prop-types";

import "../../styles/home/NewsCard.css";

const NewsCard = ({ img, title, content }) => {
  return (
    <article className="card">
      <a href="">
        <div className="card-container">
          <div className="card-img">
            <img src={img} alt={`${img}`} />
          </div>

          <div className="card-content">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

NewsCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default NewsCard;
