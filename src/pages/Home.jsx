import React, { use } from 'react';
import Slider from '../components/Slider';
import { AuthContext } from '../provider/AuthContext';
import FeaturedListing from '../components/FeaturedListing';
import WhyRF from '../components/WhyRF';
import HowItWorks from '../components/HowItWorks';

const Home = () => {

  
    return (
        <div data-theme='lemonade'>
            <Slider></Slider>
            <FeaturedListing></FeaturedListing>
            <WhyRF></WhyRF>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;