import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const ShellHeader = styled.header`
  background: rebeccapurple;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`

const Header = ({ siteTitle }) => (
  <ShellHeader>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>

    </h1>
  </ShellHeader>
)

export default Header
