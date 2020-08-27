import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import { HOME } from '../../routes';
import './style.scss';

const Login = ({ history }) => {

    // Extract values of the context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, logIn } = authContext;

    // state for login
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    // extract the user
    const { email, password } = user;

    // If the password or user does not exist
    useEffect(() => {
        if (message) {
            showAlert(message.msg, message.category);
        }
    }, [message, history]);

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // when the user wants to sign in
    const onSubmit = (e) => {
        e.preventDefault();

        // validate that there are no empty fields

        if (email !== 'user@wolox.com.ar') {
            showAlert('The email is wrong', 'alert');
        }

        if (password !== '12345678') {
            showAlert('The password is wrong', 'alert');
        }

        if (email !== 'user@wolox.com.ar' && password !== '12345678') {
            showAlert('Try again', 'alert');
        }

        if (email === 'user@wolox.com.ar' && password === '12345678') {
            history.push('/techs');
        }

        // pass to the action
        logIn({ email, password });
    }

    return (
        <>
            <Link className="login_to_home" to={HOME}><img alt="wolox logo" className="to_home_logo" src={woloxLogo} /></Link>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Inicia sesión </h2>
                    {alert ? (<div className={alert.category}>{alert.msg}</div>) : null}
                    <form onSubmit={onSubmit}>
                        <input type="text" id="email" className="fadeIn first" name="email" placeholder="Escribe el email" value={email} onChange={onChange} />
                        <input type="password" id="password" className="fadeIn second" name="password" placeholder="Escribe el password" value={password} onChange={onChange} />
                        <input type="submit" className="fadeIn third" value="Log In" />
                    </form>
                    <div id="formFooter">
                        <label className="underlineHover">
                            <input type="checkbox" name="remember" /> Mantenerse conectado
                    </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;