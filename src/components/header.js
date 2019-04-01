import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const ShellHeader = styled.header`
  background: rebeccapurple;
  padding: 1.5rem;
  grid-area: header;
`

const Header = ({ siteTitle }) => (
  <ShellHeader>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </ShellHeader>
)

export default Header
