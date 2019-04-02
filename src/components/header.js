import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const ShellHeader = styled.header`
   grid-area: header;
   display: flex;
   justify-content: center;
`
const SiteTitle = styled.span`
  display: none;
`

const Logo = styled.svg`
  max-width: 80px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  fill: currentColor;
  width: 100%;
`

const Heading = styled.h1`
  margin-bottom: 0;
  display: inline-block;
`

const LinkLogo = styled(Link)`
  display: block;
`

const Header = ({ siteTitle }) => (
  <ShellHeader>
    <Heading>
      <LinkLogo to="/">
        <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.37 99.11"><polygon points="30.74 0 1.25 0 0 0 0 1.25 0 97.86 0 99.11 1.25 99.11 30.74 99.11 31.99 99.11 31.99 97.86 31.99 92.84 31.99 91.58 30.74 91.58 7.53 91.58 7.53 7.53 30.74 7.53 31.99 7.53 31.99 6.27 31.99 1.25 31.99 0 30.74 0"/><polygon points="99.11 0 70.26 0 69 0 69 1.25 69 6.27 69 7.53 70.26 7.53 92.84 7.53 92.84 91.58 70.26 91.58 69 91.58 69 92.84 69 97.86 69 99.11 70.26 99.11 99.11 99.11 100.37 99.11 100.37 97.86 100.37 1.25 100.37 0 99.11 0"/><path d="M34.52,48.64,22,32.38H32L42.1,47.19h.1V32.38h8.35V66.74H42.2V50.91h-.1L31.63,66.74H21.11Z"/><path d="M79.26,59.64v7.1H55.37V32.38h8.35V59.64Z"/></Logo>
       <SiteTitle>{siteTitle}</SiteTitle>
      </LinkLogo>
    </Heading>
  </ShellHeader>
)

export default Header
