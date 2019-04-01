import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import styled, { createGlobalStyle } from 'styled-components';
import * as fonts from '../fonts/fonts';
import { Normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
@font-face {
  src: url('${fonts.OutputSansRegularWoff2}') format('woff2'),
       url('${fonts.OutputSansRegularWoff}') format('woff');
  font-family: 'OutputSans';
  font-style: normal;
  font-weight: 400;
}

  @font-face {
  src: url('${fonts.OutputSansBoldWoff2}') format('woff2'),
       url('${fonts.OutputSansBoldWoff}') format('woff');
  font-family: 'OutputSans';
  font-style: normal;
  font-weight: 700;
}

@font-face {
  src: url('${fonts.OutputSansBlackWoff2}') format('woff2'),
       url('${fonts.OutputSansBlackWoff}') format('woff');
  font-family: 'OutputSans';
  font-style: normal;
  font-weight: 800;
}

html { box-sizing: border-box; }

body {
  font-family: OutputSans;
  --tt-key: body;
  font-size: 22px;
}

*,
*::before,
*::after { box-sizing: inherit; }

a {
  color: initial;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
p { margin-top: 0; }

h1,
h2,
h3,
h4 {
  font-weight: 800;
  text-transform: uppercase;
}

@keyframes body {
  0%, 20% {
    font-size: 1.125em;
  }
  40% {
    font-size: 1.5em;
  }
}
`

const AppShell = styled.div`
  display: grid;
  grid-template-areas: 'header header header'
                       'space-left main space-right';
  grid-template-columns: 1fr minmax(20em, 60ch) 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: 2rem;
`

const Main = styled.main`
  grid-area: main;
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
      <AppShell>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'My fav blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Normalize />
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          {children}
        </Main>
      </AppShell>
    )}
  />
);

export default Layout
