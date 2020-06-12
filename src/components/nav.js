import React from "react"
import styled from "styled-components"

import logo from "../images/logo.png"
import { FaInstagram } from "react-icons/fa"

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavLi = styled.li`
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 2px;
  list-style-type: none;
  text-transform: uppercase;
  transition: color 0.2s ease;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: var(--color-primary);
  }
`

const Nav = () => (
  <NavStyles>
    <img src={logo} alt="diefotodudes Logo" height="42" />
    <NavUl>
      <NavLi>Die Dudes</NavLi>
      <NavLi>Foto</NavLi>
      <NavLi>Video</NavLi>
      <NavLi>Galerie</NavLi>
      <NavLi>Kontakt</NavLi>
    </NavUl>
    <a
      href="https://instagram.com/diefotodudes"
      target="_blank"
      rel="noopener noreferrer"
      title="Zu Instagram"
    >
      <FaInstagram />
    </a>
  </NavStyles>
)

export default Nav
