import "./guide_info.css";

export default function AboutBaba() {
  return (
    <div className="about-baba-container">

<div className="about-baba-images">
  <div className="image-left">
    <img
      src="https://ganpateshwarbaba.netlify.app/img/babaAbout.jpeg"
      alt="Baba Portrait"
    />
  </div>
  <div className="image-right">
    <img
      src="https://ganpateshwarbaba.netlify.app/img/samadhi2.jpeg"
      alt="Temple"
    />
    <img
      src="https://ganpateshwarbaba.netlify.app/img/samadhi3.jpeg"
      alt="Samadhi"
    />
  </div>
</div>

      <div className="about-baba-content">
        <h4 className="section-subtitle">ABOUT SANT GANPATESHWAR BABA</h4>
        <h1 className="section-title">Baba Help Those Who Help Themselves</h1>
        <p className="section-description">
          Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis
          aliquam. Etiam quis mauris justo. Vivamus purus nulla, rutrum ac risus in.
        </p>

        <div className="vision-mission">
          <div className="vm-item">
          <i class="fa-solid fa-eye vision"></i>
            <h3>Our Vision</h3>
            <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
          </div>
          <div className="vm-item">
          <i class="fa-solid fa-flag vision"></i>
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet tetur nod elit sed</p>
          </div>
        </div>

        <div className="about-baba-quote">
          <img src="https://ganpateshwarbaba.netlify.app/img/asd.jpeg" alt="Baba Photo" />
          <p>
            Lorem ipsum dolor sit amet elit. Donec tempus eros vel dolor mattis aliquam.
            Etiam quis mauris justo.
          </p>
        </div>

        <div className="baba-list">
          <ul>
            <li>✔️ Charity & Donation</li>
            <li>✔️ Parent Education</li>
          </ul>
          <ul>
            <li>✔️ Hadith & Sunnah</li>
            <li>✔️ Mosque Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
