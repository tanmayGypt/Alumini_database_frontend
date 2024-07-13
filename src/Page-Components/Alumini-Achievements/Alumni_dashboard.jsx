import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import "./Alumni.css";
import { useSelector } from "react-redux";


const AlumniCarousel = () => {
  const alumniData = useSelector((state) => state.alumniData.alumniData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovering]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + alumniData.length) % alumniData.length
    );
  };

  const handleCardHover = (hovering) => {
    setIsHovering(hovering);
  };

  return (
    <div className="carousel-container mt-20">
      <div className="carousel-background"></div>
      <h1 className="carousel-title">
        Celebrating Alumni Success:{" "}
        <span className="highlight">Achievements</span> and Milestones
      </h1>
      <div className="carousel-content">
        <button className="carousel-button left" onClick={prevSlide}>
          &#8249;
        </button>
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {alumniData.map((alumnus, index) => (
            <div
              className="carousel-item"
              key={index}
              onMouseEnter={() => handleCardHover(true)}
              onMouseLeave={() => handleCardHover(false)}
            >
              <div className="alumni-card">
                <div className="alumni-photo">
                  <FaUser /> {}
                </div>
                <div className="alumni-name">{alumnus.name}</div>
                <div className="alumni-role">{alumnus.role}</div>
                <div className="alumni-achievement">{alumnus.achievement}</div>
                <div className="alumni-year">{alumnus.year}</div>
                <div className="alumni-social-icons">
                  <FaInstagram />
                  <FaGithub />
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default AlumniCarousel;
