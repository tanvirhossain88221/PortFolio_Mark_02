import React from 'react';
import About from '../../pages/About/About';
import Experience from '../../pages/Experience/Experience';
import Skills from '../../pages/Skills/Skills';
import Carousal from '../Carousal/Carousal';
import Headline from '../Headline/Headline';
import MainNavbar from '../Navbar/MainNavbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Carousal></Carousal>
            <Headline></Headline>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
        </div>
    );
};

export default Home;