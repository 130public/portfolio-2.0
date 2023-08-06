import * as React from "react"
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../templates/layout"
import Main from "../templates/main"
import Hero from "../components/hero"
import Grid from "../components/Grid"
import {ProjectCard} from "../components/card";

const Project = (props) => {
  const {slug,title,description,cover,client} = props.node.frontmatter;
  return (
    <ProjectCard hit={props.node.frontmatter} cardType="project" hitsPerPage={props.node.hitsPerPage} />
  )
}

// markup
const ProjectPage = (props) => {
  const {data} = props;
  const hitsPerPage = Object.keys(data.allMarkdownRemark.edges).length;
  const items = data.allMarkdownRemark.edges.map(({ node }, index) => (
    <li><Project node={node} key={index} hitsPerPage={hitsPerPage} /></li>
  ))
  return (
    <Layout location={props.location}>
      <Hero className="default" title="Projects" body=""/>
      <Main>
        <Grid hitsPerPage={Object.keys(items).length} colWidth="20%">
          {items}
        </Grid>
      </Main>
    </Layout>
  )
}

export default ProjectPage;

export const projectsQuery = graphql`
  {
    allMarkdownRemark(
      limit: 100
      filter: {frontmatter: {type: {in: ["project"]}}}
    ) {
      edges {
        node {
          frontmatter {
            type
            slug
            title
            description
            role
            cover
            project_type
            client
          }
        }
      }
    }
  }
`