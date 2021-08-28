import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { menuItems } from './data/MenuItems'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "./Button"
// import "./Styles/"

const Header = () => {
 return (
   <Nav>
     {/* <NavLink to="/">Simba-USA</NavLink> */}
     <div className="logo">
        <StaticImage 
          src='../images/SIMBA_LOGO_LONG_WHITE.png'
          alt="picture of a lion. A logo. Simba"
          placeholder="blurred"
          layout="fixed"
          width={500}
          height={70}
        />
        </div>
     <Bars />
     <NavBar>
       {menuItems.map((props, index) => {
          return (
          <NavLink to={props.Link} key={index}>
            {props.title}
            
          </NavLink>
          )
        }
      )}
      
     </NavBar>
     <NavBtn>
        <Button primary="true" round="true" to="/contact">
          Contact Us Now!
          </Button>
     </NavBtn>
   </Nav>
   )
}
export default Header

const Nav = styled.nav`
  background: transparent;
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

  &:hover {
    background: ${({primary}) => (primary ? '#fff' : '#F26A2E')};

  }

`

const NavBar = styled.div`

  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px){
    display: none;
  }

 
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
  
`
