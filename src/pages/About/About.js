import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
// import Profile from "../../assets/img/profile/profile.webp";
import Profile from "../../assets/img/profile/profile2.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3 text-white">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong className="ml-2 h5"> Tanvir Hossain</strong>
                                <br />A passionate programmer and a Learner, born and brought up in Bangladesh. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js as my tech stack.
                  <br />
                  In 2021, I successfully completed my Graduation  in 'Physics'.
                  <br />
                  Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                  <br />
                  Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
                  <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                  <br /> <br />
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's talk
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1pX0Nxe5bI8hKRG0-6d2VlWQUj4Rtl5Lu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success">
                                                My Resume
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/tanvirhossain88221" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-light">
                                                GitHub
                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/tanvirHrobin007/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info">
                                                LinkedIn
                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;