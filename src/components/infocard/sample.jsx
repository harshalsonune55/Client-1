import "./infoCard.css";

export default function InfoCard({ icon, title, description}) {
  return (

    <div className="cards">
    <div className={`info-card`}>
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
