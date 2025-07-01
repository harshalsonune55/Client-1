import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cover5 from "../../components/cover/cover5.jsx";
import Footer from "../../components/Footer/footer.jsx";
import AartiGallery from "../../components/Aarti_comp/Aarti-comp.jsx";
export default function Aarti(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover5 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
<AartiGallery/>
    <Footer/>
        </div>

        </>
    );
}