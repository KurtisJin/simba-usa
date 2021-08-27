import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { menuItems } from './MenuItems/MenuItems'
import Img from "gatsby-plugin-image"
// import Logo from './Images/'

// console.log(logo);

const Header = () => {
 return (
   <Nav>
     <NavLink to="/">Simba-USA</NavLink>
     <Bars />
     <NavTest>
       {menuItems.map((props, index) => {
          return (
          <NavLink to={props.Link} key={index}>
            {props.title}
            
          </NavLink>
          )
        }
      )}
     </NavTest>
     <Img src="./Images/SIMBA_LOGO_LONG_WHIITE.png" alt="logo of a lion" />
   </Nav>
   )
}
export default Header

const Nav = styled.nav`
  background: red;
  height:80px;
  display: flex;
  justify-content:space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

 @media screen and (max-width: 768px) {
    display: block;
    position:absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

  }

`

const NavTest = styled.div`

  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }


`