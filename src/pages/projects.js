import * as React from "react"
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../templates/layout"
import Main from "../components/main"
import Hero from "../components/hero"
import Results from "../components/results";
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
      <Hero className="fun" title="Projects" body="**A currarted set of projects.** Some of these projects have additional assets, others are under non-NDA. If you're interested in a portfolio review, [message me](https://www.linkedin.com/in/jasonjgeiger')."/>
      <Main>
        <Results cardType="Project" index={["Project"]} enableSearch={false} hitsPerPage={1000} colWidth="30%" />
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