import React from "react"
import styled, { keyframes } from "styled-components"
import Nav from "./nav"

import ContentLayout from "./styles/ContentLayout"

import bg from "../images/wip.jpg"
import badge from "../images/badge.svg"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const HeaderStyles = styled.div`
  background: url(${bg}) no-repeat left center / cover;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  position: relative;
`

const MenuStyles = styled.header`
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem 0;
`

const Hero = styled.section`
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    color: var(--color-primary);
    font-family: var(--font-headline);
    font-size: 20rem;
    line-height: 1;
    margin-bottom: 2rem;
  }

  span {
    background: #fff;
    color: #343434;
    display: inline-block;
    font-size: 2.2rem;
    padding: 0.6rem 1rem;
    margin-bottom: 1.2rem;
  }
`

const Badge = styled.img`
  animation: ${spin} 12s linear infinite;
  position: absolute;
  bottom: 5rem;
  right: 5rem;
`

const Header = () => (
  <HeaderStyles>
    <MenuStyles>
      <ContentLayout>
        <Nav />
      </ContentLayout>
    </MenuStyles>
    <Hero>
      <div>
        <h1>moin</h1>
        <span>
          Wir sind diefotodudes, und wir produzieren hochwertige Fotos und
          Videos mit einem ganz eigenen Stil.
        </span>
        <br />
        <span>
          Klingt gut? Dann machs dir bequem & schau dich gerne n bisschen um :)
        </span>
        <Badge
          src={badge}
          height="100"
          alt="Producing the freshest stuff since 2018"
        />
      </div>
    </Hero>
  </HeaderStyles>
)

export default Header
