import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';
import {
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

const AuthState = (props) => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Return the authenticated user
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token);
        }
    }

    // When the user log in
    const logIn = async (data) => {
        try {
            const response = await clientAxios.post('/login', data);

            dispatch({
                type: LOGIN_SUCCESSFUL,
                payload: response.data
            });

            // Get user
            userAuthenticated();

        } catch (error) {
            console.log("Something went wrong");
            const alert = {
                msg: "Something went wrong",
                technology: 'alert'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    // Close session
    const logOut = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                logIn,
                userAuthenticated,
                logOut
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;