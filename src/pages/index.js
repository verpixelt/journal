import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components';

const ListLink = styled(Link)`
  display: inline-block;
`

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
`

const ListEl = styled.li`
  &:not(:last-child) {
    margin-bottom: 3rem;
    @media(min-width: 640px) {
      margin-bottom: 6rem;
    }
  }
`

const Date = styled.time`
  font-family: var(--sansSerifFS);
  display: block;
  margin-bottom: .5rem;
  font-weight: 900;
`

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <List>
        {postList.edges.map(({ node }, i) => (
          <ListEl key={i}>
            <ListLink to={node.fields.slug} className="link" >
              <h1>{node.frontmatter.title}</h1>
              <Date>{node.frontmatter.date}</Date>
              <span>{node.excerpt}</span>
            </ListLink>
          </ListEl>
        ))}
      </List>
    </Layout>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`