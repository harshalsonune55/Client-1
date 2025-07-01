import "./footer.css";
import { FaPhone, FaMapMarkerAlt, FaCheck, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <h2>Subscribe our newsletter</h2>
        <p>Get the latest news and other tips</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-col">
          <h3>
            संत <span>गणपतेश्वर बाबा</span>
          </h3>
          <p>
            Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat
            duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore.
          </p>
          <button className="donate-btn">Donate Now</button>
        </div>

        <div className="footer-col">
          <h4>Our Temple</h4>
          <p className="label"><strong>Our Address</strong></p>
          <div className="icon-row">
            <div className="icon-box"><FaMapMarkerAlt /></div>
            <p>Chandur-railway , Amravati, India, Maharashtra</p>
          </div>
          <p className="label"><strong>Our Mobile</strong></p>
          <div className="icon-row">
            <div className="icon-box"><FaPhone /></div>
            <p>+012 345 67890</p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore Link</h4>
          <ul className="footer-links">
            {["Home", "About Us", "Our Features", "Contact us", "Our Blog", "Our Events", "Donations", "Sermons"].map((link, i) => (
              <li key={i}><FaCheck color="#f4c542" /> {link}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col latest-news">
          <h4>Latest News</h4>
          {[1, 2].map((item, i) => (
            <div key={i} className="news-item">
              <img src="https://ganpateshwarbaba.netlify.app/img/news3Mini.jpg" alt="news" />
              <div>
                <p className="date">01 Jan 2045</p>
                <p className="desc">Lorem ipsum dolor sit amet elit eros vel</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© <a href="https://ganpateshwarbaba.netlify.app/img/news4Mini.jpg" target="_blank" rel="noopener noreferrer">https://www.royalswebtechpvtltd.com/</a>, All Right Reserved.</p>
        <p>Designed By <span>Royals Webtech PVT.LTD</span></p>
        <div className="scroll-top"><FaArrowUp /></div>
      </div>
    </footer>
  );
}
