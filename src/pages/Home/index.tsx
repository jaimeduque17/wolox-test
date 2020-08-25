import React, { SFC } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BodyContent from '../../components/BodyContent';

export interface HomeProps {

}

const Home: SFC<HomeProps> = () => {
    return (
        <>
            <Header />
            <BodyContent />
            <Footer />
        </>
    );
}

export default Home;