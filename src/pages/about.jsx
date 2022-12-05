import React from "react";
import "./styles_page.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Nav_bar from "../components/Navbar";
import Footer from "../components/Footer";
import SunburstChart from "../components/SunburstChart";
import multisats from "../data/mulstats.json";

function AboutPage(){
    return(
        <>
            <div className="page">
                <Nav_bar />
                <div className="tittle_main">
                    The Street's Portfolio about
                </div>
            </div>
            <div className="container py-5" style={{borderTop: "none"}}>
                <Row className="justify-content-md-center">
                    <Col sm={3}>
                        Texto Presentacion
                    </Col>
                    <Col sm={7} className="text-end">
                        Foto
                    </Col>
                </Row>
                
            </div>

            <div className="container py-5">
                <Row className="justify-content-md-center">
                    <Col sm={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet fugit, illum fugiat nam voluptate ad, quo amet soluta a aut at. Adipisci officiis perferendis, neque dolores voluptas quisquam aliquid?
                    </Col>
                    <Col sm={7} className="text-end">
                        <SunburstChart data={multisats} />
                    </Col>
                </Row>
                
            </div>
            <div className="container py-5">
                <Row className="justify-content-md-center">
                    <Col sm={3}>
                        Texto Presentacion
                    </Col>
                    <Col sm={7} className="text-end">
                        Foto
                    </Col>
                </Row>
                
            </div>
            <div className="container py-5" style={{borderBottom: "none"}}>
                <Row className="justify-content-md-center">
                    <Col sm={3}>
                        Texto Presentacion
                    </Col>
                    <Col sm={7} className="text-end">
                        Foto
                    </Col>
                </Row>
                
            </div>
            <Footer />
        </> 
    );
}

export default AboutPage;