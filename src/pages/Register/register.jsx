import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cover8 from "../../components/cover/cover8.jsx";
import Footer from "../../components/Footer/footer.jsx";
import ResForm from "../../components/form/resform.jsx";
export default function Register(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover8 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
<ResForm/>
    <Footer/>
        </div>

        </>
    );
}