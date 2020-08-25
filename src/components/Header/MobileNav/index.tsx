import React, { SFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './style.scss';

interface UlProps {
  open: boolean;
}

const Ul = styled.ul<UlProps>`
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
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
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

export interface MobileNavProps {
  open: any
}

const MobileNav: SFC<MobileNavProps> = ({ open = false }) => {
  return (
    <Ul open={open}>
      <li><a href="/#init" className="home">Inicio</a></li>
      <li><a href="/#technologies" className="home">Tecnologías</a></li>
      <li><a href="/#benefits" className="home">Beneficios</a></li>
      <li><a href="/#requirements" className="home">Requerimientos</a></li>
      <li>{window.screen.width <= 768
        ? <Link to="/login" className="home">Login</Link>
        : <Link to="/login" className="login_button">
          Login
          </Link>}</li>
    </Ul>
  );
}

export default MobileNav;