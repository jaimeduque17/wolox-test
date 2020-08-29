import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN } from '../../routes';
import AuthContext from '../../context/authentication/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {

    // Extract authentication information
    const authContext = useContext(AuthContext);
    const { auth, token, userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
        // eslint-disable-next-line
    }, []);

    return (
        <Route
            {...props}
            render={props => !auth && !token ? (<Redirect to={LOGIN} />) : (<Component {...props} />)}
        />
    );
}

export default PrivateRoute;