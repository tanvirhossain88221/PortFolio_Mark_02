import React from 'react';
import Carousal from '../Carousal/Carousal';
import Headline from '../Headline/Headline';
import MainNavbar from '../Navbar/MainNavbar';

const Home = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Carousal></Carousal>
            <Headline></Headline>
        </div>
    );
};

export default Home;