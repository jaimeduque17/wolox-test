import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import woloxLogo from '../../assets/images/logo_full_color.svg';
import { HOME } from '../../routes';
import './style.scss';

export interface LoginProps {

}

const Login: SFC<LoginProps> = () => {
    return (
        <>
        <Link className="login_to_home" to={HOME}><img alt="wolox logo" className="to_home_logo" src={woloxLogo} /></Link>
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2 className="active"> Inicia sesión </h2>
                <form>
                    <input type="text" id="login" className="fadeIn first" name="login" placeholder="Escribe el email" />
                    <input type="password" id="password" className="fadeIn second" name="login" placeholder="Escribe el password" />
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