import "./Aarti-comp.css";
import { useState } from "react";

const aartis = [
  {
    title: "श्री शंकरांची आरती",
    image: "https://ganpateshwarbaba.netlify.app/img/aarti4.jpeg",
  },
  {
    title: "विठ्ठलाची आरती",
    image: "https://ganpateshwarbaba.netlify.app/img/aarti3.jpeg",
  },
  {
    title: "शिव जी की आरती",
    image: "https://ganpateshwarbaba.netlify.app/img/aarti2.jpeg",
  },
  {
    title: "आरती जगदंबेची",
    image: "https://ganpateshwarbaba.netlify.app/img/aarti1.jpeg",
  },
  {
    title: "श्री हनुमान जी की आरती",
    image: "https://ganpateshwarbaba.netlify.app/img/aarti5.jpg",
  },
  {
    title: "आरती देवीची",
    image: "https://ganpateshwarbaba.netlify.app/img/aarti6.jpg",
  },
];

export default function AartiGallery() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <div className="aarti-container">
      <h1 className="aarti-heading">आरती संग्रह</h1>

      <div className="aarti-grid">
        {aartis.map((item, idx) => (
          <div className="aarti-card" key={idx} onClick={() => openModal(item.image)}>
            <div className="aarti-img-container">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="aarti-title">{item.title}</p>
          </div>
        ))}
      </div>

      {modalImage && (
        <>
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="fullscreen" />
            </div>
          </div>
          <div className="modal-close" onClick={closeModal}>
            &times;
          </div>
        </>
      )}
    </div>
  );
}
