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

  *,
  *::before,
  *::after { box-sizing: inherit; }

  body {
    -webkit-font-smoothing: antialiased;
    color: hsl(60, 2%, 33%);
    font-family: var(--serifFS);
    --tt-key: body;
    font-size: 28px;
    line-height: 1.3;
  }

  p { margin-bottom: 2rem; }

  p + p {
    margin-top: -2rem;
    text-indent: 1em;
  }

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

  h1 {
    margin-bottom: 1rem;
    line-height: 1.1;
    --tt-key: h1;
  }

  h2 { margin-bottom: .75rem; }

  @keyframes h1 {
    0%, 20% {
      line-height: 1;
    }
    71.25% {
      line-height: 1.1;
    }
  }

  @keyframes body {
    0%, 20% {
      font-size: 16px;
      line-height: 1.2;
    }
    40% {
      font-size: 22px;
      line-height: 1.3;
    }
    71.25% {
      font-size: 26px;
      line-height: 1.35;
    }
  }
`

const AppShell = styled.div`
  display: grid;
  grid-template-areas: 'header header header'
                      'space-left main space-right';
  grid-template-columns: 1fr minmax(15em, 54ch) 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: 10rem;
  padding: 64px 16px;

  @media(min-width: 640px) {
    padding: 96px 32px;
  }
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
