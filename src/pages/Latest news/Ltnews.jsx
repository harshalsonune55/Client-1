import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cover6 from "../../components/cover/cover6.jsx";
import News from "../../components/News/news.jsx";
import Footer from "../../components/Footer/footer.jsx";
export default function Ltnews(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover6 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <News/>
    <Footer/>
        </div>

        </>
    );
}