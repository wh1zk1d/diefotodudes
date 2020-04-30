import React from "react"
import styled from "styled-components"

const ContentStyles = styled.div`
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const ContentLayout = ({ children }) => (
  <ContentStyles>{children}</ContentStyles>
)

export default ContentLayout
