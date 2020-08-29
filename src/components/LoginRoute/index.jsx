import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TECHLIST } from '../../routes';
import AuthContext from '../../context/authentication/authContext';

const LoginRoute = ({ component: Component, ...props }) => {

    // Extract authentication information
    const authContext = useContext(AuthContext);
    const { token, userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
        // eslint-disable-next-line
    }, []);

    return (
        <Route
            {...props}
            render={props => token ? (<Redirect to={TECHLIST} />) : (<Component {...props} />)}
        />
    );
}

export default LoginRoute;