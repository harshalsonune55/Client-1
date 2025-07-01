import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./home.css";
import Cover from "../../components/cover/cover.jsx";
import AboutBaba from "../../components/guide_info/guide_info.jsx";
import Banner from "../../components/Banner/banner.jsx";
import CardGrid from "../../components/infocard/infocard.jsx";
import Events from "../../components/eve/eve.jsx";
import News from "../../components/News/news.jsx";
import Testimonial from "../../components/testomonial/testo.jsx";
import Footer from "../../components/Footer/footer.jsx";
export default function Hocontae(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <AboutBaba/>
    <Banner/>
    <CardGrid/>
    <Events/>
    <News/>
    <Testimonial/>
    <Footer/>
        </div>

        </>
    );
}