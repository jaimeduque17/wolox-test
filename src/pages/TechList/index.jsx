import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/authentication/authContext';

const TechList = () => {

    // Extract authentication information
    const authContext = useContext(AuthContext);
    const { userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);

    return (  
        <div>
            TechList
        </div>
    );
}
 
export default TechList;