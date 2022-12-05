import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="foot_container">
        <Row className="justify-content-md-center">
          <Col sm={1} className="text-end">
            <ul className="list-unstyled icons">
              <li>
                <a href="">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <BsGithub />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={3}>
            <ul className="list-unstyled list">
              <li className="li_tittle">
                <a href="http://">Paul G Lacalle</a>
              </li>
              <li>
                <a href="http://">Git Projects</a>
              </li>
              <li>
                <a href="http://">Photography</a>
              </li>
              <li>
                <a href="http://">Food Recipes</a>
              </li>
            </ul>
          </Col>
          <Col sm={3} className="text-center py-4">
            <a href="/about" className="contact">
              <h5>Contact</h5>
            </a>
          </Col>
          <Col sm={3} className="text-end">
            <ul className="list-unstyled">
              <li className="li_tittle">George R La Calle</li>
              <li>Git Projects</li>
            </ul>
          </Col>
          <Col sm={1}>
            <ul className="list-unstyled icons">
              <li>
                <a href="">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <BsGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center py-5">
          <h6>the street family</h6>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
