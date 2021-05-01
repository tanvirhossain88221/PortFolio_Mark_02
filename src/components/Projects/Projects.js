import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Elite from "../../assets/img/projects/Elite Decor.webp";
import Kitchen from "../../assets/img/projects/My KITCHEN.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./Projects.css";

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date="01/02/2021"
                        className="text-center"
                        text="ELITE DECOR"
                        src={Elite}
                        alt="ELITE DECOR"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                      </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Its a Interior Design website
                          <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Admin signIn Option</li>
                                                    <li>Admin can add and delete service</li>
                                                    <li>User signIn option.user can give review</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                HTML5
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                CSS3
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                React
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                Bootstrap
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                Node.js
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt="MongoDB"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                MongoDB
                              </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://elite-decor.web.app/"
                                    target="_blank"
                                >
                                    SEE LIVE
                  </UrlButton>
                                <UrlButton
                                    href="https://github.com/Porgramming-Hero-web-course/complete-website-client-tanvirhossain88221"
                                    target="_blank"
                                >
                                    SOURCE CODE
                  </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                    {/* Project: My Kitchen */}
                    <ImageEvent
                        date="16/09/2020"
                        className="text-center"
                        text="MY KITCHEN"
                        src={Kitchen}
                        alt="My Kitchen"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                      </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Its a restaurent's website
                          <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>You can add Food and order food</li>
                                                    <li>Google login System</li>
                                                    <li>Spinner integrated and
Responsive Website</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                HTML5
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                CSS3
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                React
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                Node.js
                              </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt="MongoDB"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                MongoDB
                              </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIALUI}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                Material-UI
                              </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://my-kitchen-assignment10.web.app/"
                                    target="_blank"
                                >
                                    SEE LIVE
                  </UrlButton>
                                <UrlButton
                                    href="https://github.com/Porgramming-Hero-web-course/full-stack-client-tanvirhossain88221"
                                    target="_blank"
                                >
                                    SOURCE CODE
                  </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>


                </Events>
            </Timeline>
        </div>
    );
};

export default Projects;