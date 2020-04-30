import React from "react"
import styled from "styled-components"
import Nav from "./nav"

import ContentLayout from "./styles/ContentLayout"

import bg from "../images/hero.jpg"

const HeaderStyles = styled.div`
  background: url(${bg}) no-repeat center center / cover;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const MenuStyles = styled.header`
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem 0;
`

const Hero = styled.section`
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    color: var(--color-primary);
    font-size: 28rem;
    line-height: 1;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 2.8rem;
  }
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
        <p>
          Hast du Bock auf richtig gute Bilder und Videos?
          <br />
          Dann machs dir bequem & schau dich gerne n bisschen um.
        </p>
      </div>
    </Hero>
  </HeaderStyles>
)

export default Header
