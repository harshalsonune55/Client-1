import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cover3 from "../../components/cover/cover3.jsx";
import CardGrid from "../../components/infocard/infocard.jsx";
import Testimonial from "../../components/testomonial/testo.jsx";
import Footer from "../../components/Footer/footer.jsx";
export default function Activities(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover3 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />

    <CardGrid/>
    <Testimonial/>
    <Footer/>
        </div>

        </>
    );
}