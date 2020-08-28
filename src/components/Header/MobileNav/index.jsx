import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOGIN } from '../../../routes';
import './style.scss';

const Ul = styled.ul`
@media screen and (min-width: 769px) {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  z-index: 2;

  li {
    padding: 18px 28px;
  }
}

@media screen and (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: #2CA7DF;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: -16px;
  height: 100%;
  width: 100%;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  list-style: none;

  li {
    color: #fff;
    padding: 18px 10px;
  }
}
`;

const MobileNav = ({ open }) => {

  const token = localStorage.getItem('token');

  return (
    <Ul open={open}>
      <li><a href="/#init" className="home">Inicio</a></li>
      <li><a href="/#technologies" className="home">Tecnologías</a></li>
      <li><a href="/#benefits" className="home">Beneficios</a></li>
      <li><a href="/#requirements" className="home">Requerimientos</a></li>
      {!token
        ? <li>
          <Link to={LOGIN} className="login_button">
            Login
          </Link></li>
        : null}
    </Ul>
  );
}

export default MobileNav;