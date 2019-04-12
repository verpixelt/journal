import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import Icon from '../images/icon.png';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Date = styled.time`
  font-family: var(--sansSerifFS);
  display: block;
  font-weight: 900;
`

function BlogPost(props) {

  const post = props.data.markdownRemark;
  const url = props.data.site.siteMetadata.siteUrl
  const { title, description, date } = post.frontmatter;
  const thumbnail =
    post.frontmatter.image &&
    post.frontmatter.image.childImageSharp.resize.src

  return (
    <Layout>
      <Metatags
        title={title}
        description={description}
        thumbnail={thumbnail ? url + thumbnail : url + Icon}
        url={url}
        pathname={props.location.pathname}
      />
      <article>
        <h1>{title}</h1>
        <Date>{date}</Date>
        {thumbnail && <Img fluid={post.frontmatter.image.childImageSharp.fluid} />}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
 query PostQuery($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       frontmatter {
        title
        description
        date(formatString: "MMMM Do YYYY")
       }
   }

  site {
    siteMetadata {
        siteUrl
      }
   }
}
`
