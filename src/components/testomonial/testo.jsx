import "./testo.css";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Gedam",
    profession: "Profession",
    image: "https://ganpateshwarbaba.netlify.app/img/testimonial-4.jpg",
    text: "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
    rating:"4",
  },
  {
    name: "Kalash Pandey",
    profession: "Profession",
    image: "https://ganpateshwarbaba.netlify.app/img/review.jpg",
    text: "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
    rating:"5",
  },
  {
    name: "Amey Patil",
    profession: "Profession",
    image: "https://ganpateshwarbaba.netlify.app/img/review2.jpg",
    text: "Lorem ipsum dolor sit amet elit, sed do tempor ut labore et dolore magna aliqua. Ut enim ad minim quis.",
    rating:"3",
  },
  {
    name: "Pooja Sharma",
    profession: "Teacher",
    image: "	https://ganpateshwarbaba.netlify.app/img/review2.jpg",
    text: "Sant Ganpateshwar Baba has transformed my spiritual journey. I'm grateful for the blessings.",
    rating:"4",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < testimonials.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="testimonial-container">
      <p className="subheading">TESTIMONIAL</p>
      <h1 className="main-heading">
        What People Say About <span>संत गणपतेश्वर बाबा</span>
      </h1>

      <div className="testimonial-wrapper">
        <button className="nav-btn left" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="testimonial-carousel">
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${index * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="image-section">
                  <img src={item.image} alt={item.name} />
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                </div>
                <h3>{item.name}</h3>
                <p className="profession">{item.profession}</p>
                <div className="stars">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} color="#f4c542" />
                    ))}
                </div>
                <p className="description">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
