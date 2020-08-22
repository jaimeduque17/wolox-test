import React, { SFC } from 'react';
import Header from '../../components/Header';

export interface HomeProps {
    
}
 
const Home: SFC<HomeProps> = () => {
    return (  
        <>
            <Header />
        </>
    );
}
 
export default Home;