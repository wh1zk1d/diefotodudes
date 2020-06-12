import React from "react"
import SEO from "./seo"
import { Helmet } from "react-helmet"
import GlobalStyles from "./styles/GlobalStyles"

import ContentLayout from "./styles/ContentLayout"
import Header from "./header"

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <SEO title={title} />
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/fxg4jde.css" />
      </Helmet>
      <Header />
      <ContentLayout>{children}</ContentLayout>
    </>
  )
}

export default Layout
