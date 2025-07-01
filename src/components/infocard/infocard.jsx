import React from "react";
import {
  FaHandsHelping,
  FaPrayingHands,
  FaOm,
  FaUsers,
  FaSun,
  FaBook,
} from "react-icons/fa";
import "./infocard.css";

function InfoCard({ icon, title, description }) {
  return (
    <div className="cards">
      <div className="info-card">
        <div className="icon">{icon}</div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default function InfoCards() {
  return (
    <div className="info-card-section">
      <p className="card-subheading">ACTIVITIES</p>
      <h1 className="card-heading">Here Are Our Activities</h1>
      <div className="card-grid">
        <InfoCard
          icon={<FaHandsHelping />}
          title="Titur Purnima"
          description="Titor Pournima is a special occasion celebrated with devotion in honor of local deities."
        />
        <InfoCard
          icon={<FaPrayingHands />}
          title="Ganpateshwar Baba's Jayanti"
          description="Reminds us of the power of faith and the beauty of traditions that connect us to the divine."
        />
        <InfoCard
          icon={<FaOm />}
          title="Hari-Har Milan"
          description="Marks the divine union of Lord Shiva and Lord Vishnu on Kartik Shukla Chaturdashi."
        />
        <InfoCard
          icon={<FaUsers />}
          title="Devotes"
          description="Devotees seek Baba’s blessings for wisdom and prosperity, trusting in his divine guidance."
        />
        <InfoCard
          icon={<FaSun />}
          title="Prakat Divas"
          description="Marks the auspicious day when Baba manifests on Earth and is honored by prayers and rituals."
        />
        <InfoCard
          icon={<FaBook />}
          title="Thoughts"
          description="Public thoughts reflect deep reverence and faith in Baba's divine power to guide and bless."
        />
      </div>
    </div>
  );
}
