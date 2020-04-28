import React from "react"
import styled from "styled-components"
import Nav from "./nav"

import ContentLayout from "./styles/ContentLayout"

const HeaderStyles = styled.header`
  background: #1a2a3a;
  color: #fff;
  padding: 1rem 0;
`

const Header = () => (
  <HeaderStyles>
    <ContentLayout>
      <Nav />
    </ContentLayout>
  </HeaderStyles>
)

export default Header
