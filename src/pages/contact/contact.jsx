import React from "react";
import Navbar from "../../components/navbar/navbar";
import Cover7 from "../../components/cover/cover7.jsx";

import Footer from "../../components/Footer/footer.jsx";
import Form from "../../components/form/form.jsx";
export default function Contact(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover7 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <Form/>
    <Footer/>
        </div>

        </>
    );
}