import React from "react";
import "./styles_page.css"
import Nav_bar from "../components/Navbar";
import Footer from "../components/Footer";

function MainPage(){
    return(
        <>
            <div className="main_page">
                <Nav_bar />
                <div className="tittle_main">
                    The Street's Portfolio
                </div>
            </div>
            <Footer />
        </> 
    );
}

export default MainPage;