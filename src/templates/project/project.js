import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../../templates/layout"
import Main from "../../templates/main"
import Hero from "../../components/hero"
import Markdown from "../../components/markdown"

const ProjectHero = styled(Hero)`
  &.gutter-0{
    padding-top:0;
    padding-left: var(--gutter-xl);
    padding-right: var(--gutter-xl);
    padding-bottom:var(--gutter-sm);
    border:0;
  }
`
const Role = styled.div`
  margin: var(--gutter-md) 0 0;
  padding:0 0 0 var(--gutter-sm);
  color:var(--text-primary);
  border-width:0 0 0 4px;
  border-style:solid;
  border-color:var(--theme-color-primary);
  font-family:var(--theme-font-secondary);
`
const projectTemplate = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <ProjectHero 
          className="invert gutter-0"
          title={frontmatter.title}
          body={frontmatter.description}
          // cover={frontmatter.cover}
        >
          <Link to="/projects">Back to projects</Link>
          <Role className="inverse">
            <span>Client - {frontmatter.client}<br/>
            Role - {frontmatter.role}<br/>
            Type - {frontmatter.type}<br/>
            Project type - {frontmatter.project_type}<br/>
            Date - {frontmatter.date}<br/></span>
          </Role>
        </ProjectHero>
        <Main>
          <div dangerouslySetInnerHTML={{ __html: html }} />
      </Main>
    </Layout>
  )
}
export default projectTemplate;

export const projectQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        type
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        role
        cover
        client
      }
    }
  }
`