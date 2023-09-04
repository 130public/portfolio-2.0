import * as React from "react";
import {Link} from "gatsby";
import { graphql } from 'gatsby'
import styled from "styled-components";
import Markdown from '../components/markdown'

import Layout from "../templates/layout";
import Main from "../components/main";
import Hero from "../components/hero";
import HashLink from  "../components/hash";
import SocialProfiles from "../components/socialprofiles";
import Results from "../components/results";


const Intro = styled.h1`
  font-size: var(--font-md);
`

// markup
const IndexPage = (props) => {

  const{data} = props;

  return (
    <Layout location={props.location}>
      <Hero className="fun">
        <Intro>Jason Geiger is a principal designer on the <a href="https://microsoft.design">Microsoft Design</a> team focused on creating signature experiences for Windows 11.</Intro>
        <p>
        <strong>Skills:</strong> <HashLink string="human centric design" /> <HashLink string="user advocacy" />  <HashLink string="experience strategy" />  <HashLink string="user research" />  <HashLink string="design thinking" />  <HashLink string="designing for AI" />  <HashLink string="ideation" />  <HashLink string="prototyping" />  <HashLink string="leadership" />  <HashLink string="collaboration" />  <HashLink string="learning psychology" />  <HashLink string="information architecture" />  <HashLink string="marketing" />  <HashLink string="sketch" />  <HashLink string="invision" />  <HashLink string="nodejs" />  <HashLink string="react" />  <HashLink string="sass" />
        </p>
        <p><SocialProfiles/> Portfolio available by <Link to="https://www.linkedin.com/in/jasonjgeiger" rel="nofollow">request</Link>.</p>
        {/* <br/><br/><br/>
        <h2>Recently read, watched, or listened</h2>
        <Results cardType="project" index="Project" enableSearch={false} hitsPerPage={3} colWidth="30%" /> */}
      </Hero>
      <Main>
        <Results cardType="project" index={["Project"]} enableSearch={false} hitsPerPage={3} colWidth="30%" />
      </Main>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "index" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-DD")
      body{
        body
      }
      skills {
        ... on ContentfulSkill {
          id
          name
        }
      }
    }
  }
`

export default IndexPage