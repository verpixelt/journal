import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
:root {
  --serifFS: Georgia, 'Times New Roman', Times, serif;
  --sansSerifFS: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --y: hsl(44, 96%, 64%);
}

html { box-sizing: border-box; }

body {
  -webkit-font-smoothing: antialiased;
  color: hsl(60, 2%, 33%);
  /* font-family: OutputSans; */
  font-family: var(--serifFS);
  --tt-key: body;
  font-size: 22px;
  line-height: 1.2;
}

*,
*::before,
*::after { box-sizing: inherit; }

a {
  color: inherit;
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
  font-family: var(--sansSerifFS);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -.6px;
}

h1 { margin-bottom: 1rem; }

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
  grid-template-columns: 1fr minmax(15em, 60ch) 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: 10rem;
  padding: 6rem 2rem;
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
