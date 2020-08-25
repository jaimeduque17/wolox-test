import React, { SFC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import woloxLogo from '../../../assets/images/logo_full_color.svg';
import MobileNav from '../MobileNav';
import { HOME } from '../../../routes';
import './style.scss';

interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => props.open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${props => props.open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export interface BurgerProps {

}

const Burger: SFC<BurgerProps> = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="menu_content">
            <Link to={HOME}><img alt="wolox logo" className="wolox_logo" src={woloxLogo} /></Link>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <MobileNav open={open} />
        </div>
    );
}

export default Burger;