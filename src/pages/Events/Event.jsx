import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cover4 from "../../components/cover/cover4.jsx";
import Events from "../../components/eve/eve.jsx";
import Footer from "../../components/Footer/footer.jsx";
export default function Eventsp(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover4 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />

    <Events/>
    <Footer/>
        </div>

        </>
    );
}