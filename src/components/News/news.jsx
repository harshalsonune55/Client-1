import "./news.css";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "परब्रह्म श्री गणपतेश्वर बाबांच्या पुण्यतिथी समारंभे",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://ganpateshwarbaba.netlify.app/img/news4.jpeg",
      date: "01 Jan 2045",
    },
    {
      id: 2,
      title:
        "राणा गणपतेश्वर मंदिर पुण्यतिथी महोत्सवातील काही अमूल्य क्षण",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://ganpateshwarbaba.netlify.app/img/new2.jpeg",
      date: "01 Jan 2045",
    },
    {
      id: 3,
      title: "१४ नोव्हेंबरला गणपतेश्वर बाबांचा पुण्यतिथी सोहळा",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sit nemo odio eius iusto pariatur maiores numquam, inventore deserunt fugiat ipsum similique autem dolor excepturi.",
      image: "https://ganpateshwarbaba.netlify.app/img/news3.jpeg",
      date: "01 Jan 2045",
    },
  ];

  return (
    <div className="latest-news-container">
      <h1 className="news-heading">
        Latest From <span>Our News</span>
      </h1>
      <div className="news-grid">
        {newsItems.map((item) => (
          <div className="news-card" key={item.id}>
            <div className="news-image-container">
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-date">{item.date}</div>
            </div>
            <h3 className="news-title">{item.title}</h3>
            <p className="news-desc">{item.description}</p>
            <button className="details-btn">More Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
