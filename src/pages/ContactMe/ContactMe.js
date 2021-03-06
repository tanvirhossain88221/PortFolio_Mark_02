import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ContactMe.css";

const ContactMe = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:tanvirhossain88221@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="tanvirhossain88221@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/tanvirHrobin007/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/tanvirhossain88221" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-light" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://twitter.com/Tanvir_H_Robin" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="Tweets are welcomed!">
                                    <i className="fab fa-twitter"></i> Twitter
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/tanvir.hossain07/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Say hello on FB">
                                    <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactMe;