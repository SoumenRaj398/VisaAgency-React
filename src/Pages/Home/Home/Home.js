import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Clients></Clients>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;