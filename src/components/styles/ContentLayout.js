import React from "react"
import styled from "styled-components"

const ContentStyles = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 80%;
`

const ContentLayout = ({ children }) => (
  <ContentStyles>{children}</ContentStyles>
)

export default ContentLayout
