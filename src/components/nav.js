import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
  font-size: 1.6rem;
  letter-spacing: 1px;
  list-style-type: none;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const Nav = () => (
  <NavStyles>
    <h2>🤓</h2>
    <NavUl>
      <NavLi>Home</NavLi>
      <NavLi>Foto</NavLi>
      <NavLi>Video</NavLi>
      <NavLi>Projekte</NavLi>
      <NavLi>Kontakt</NavLi>
    </NavUl>
  </NavStyles>
)

export default Nav
