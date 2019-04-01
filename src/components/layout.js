import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  --tt-key: body;
  font-size: 22px;
}

@keyframes body {
  0%, 20% {
    font-size: 18px;
  }
  40% {
    font-size: 22px;
  }
}
`

const Shell = styled.main`
  margin: 0 auto;
  max-width: 60ch;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My fav blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Shell>
          {children}
       </Shell>
      </>
    )}
  />
);

export default Layout
