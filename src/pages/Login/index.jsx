import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import tokenAuth from '../../config/token';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import Languages from '../../components/Language';
import { HOME } from '../../routes';
import './style.scss';

const Login = ({ history }) => {

    // translations
    const { t } = useTranslation();

    // Extract values of the context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { auth, logIn } = authContext;

    // state for login
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    const [checked, setChecked] = useState(false);

    // extract the user
    const { email, password } = user;

    // If the password or user does not exist
    useEffect(() => {
        if (auth && email === 'user@wolox.com.ar' && password === '12345678') {
            history.push('/techs');
            const token = checked === true ? localStorage.getItem('token') : localStorage.removeItem('token');
            if (token) {
                tokenAuth(token);
            }
        }
    }, [auth, checked, email, password, history]);

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
            showAlert(`${t('Login.error.email')}`, 'alert');
        }

        if (password !== '12345678') {
            showAlert(`${t('Login.error.password')}`, 'alert');
        }

        if (email !== 'user@wolox.com.ar' && password !== '12345678') {
            showAlert(`${t('Login.error.both')}`, 'alert');
        }

        // pass to the action
        logIn({ email, password });
    }

    return (
        <>
            <Languages />
            <Link className="login_to_home" to={HOME}><img alt="wolox logo" className="to_home_logo" src={woloxLogo} /></Link>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> {t('Login.title')} </h2>
                    {alert ? (<div className={alert.category}>{alert.msg}</div>) : null}
                    <form onSubmit={onSubmit}>
                        <input type="text" id="email" className="fadeIn first" name="email" placeholder={t('Login.email')} value={email} onChange={onChange} />
                        <input type="password" id="password" className="fadeIn second" name="password" placeholder={t('Login.password')} value={password} onChange={onChange} />
                        <input type="submit" className="fadeIn third" value={t('Login.submit')} />
                    </form>
                    <div id="formFooter">
                        <label className="underlineHover">
                            <input type="checkbox" name="remember" checked={checked} onChange={() => setChecked(!checked)} /> {t('Login.connected')}
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;