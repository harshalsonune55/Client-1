import Navbar from "../../components/navbar/navbar";
import AboutBaba from "../../components/guide_info/guide_info.jsx";
import Banner from "../../components/Banner/banner.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Cover2 from "../../components/cover/cover2.jsx";
export default function About(){
    return(
        <>
        <div className="page-01">
        <div className="home-container">
      <div className="half-background" />
      <Navbar />
      <Cover2 />
    </div>
    <br /><br /><br /><br /><br /><br /><br />
    <AboutBaba/>
    <Banner/>
    <Footer/>
        </div>

        </>

);

}