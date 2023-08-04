import * as React from "react";
import {Link} from "gatsby";

import Layout from "../templates/layout";
import Main from "../templates/main";
import Hero from "../components/hero";

import HashLink from  "../components/hash";
import SocialProfiles from "../components/socialprofiles";
import Resources from "../components/resources";

// markup
const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <Hero className="fun" title="" body="">
        <h1>Jason J Geiger</h1>
        <p>
        <strong>Skills:</strong> <HashLink string="human centric design" /> <HashLink string="user advocacy" />  <HashLink string="experience strategy" />  <HashLink string="user research" />  <HashLink string="design thinking" />  <HashLink string="designing for AI" />  <HashLink string="ideation" />  <HashLink string="prototyping" />  <HashLink string="leadership" />  <HashLink string="collaboration" />  <HashLink string="learning psychology" />  <HashLink string="information architecture" />  <HashLink string="marketing" />  <HashLink string="sketch" />  <HashLink string="invision" />  <HashLink string="nodejs" />  <HashLink string="react" />  <HashLink string="sass" />
        </p>
        <p><i>Portfolio available by <Link to="/projects" rel="nofollow">request</Link>.</i></p>
        <SocialProfiles/>
      </Hero>
      <Main>
        <h2>Recently read, watched, or listened</h2>
        <Resources enableSearch={false} hitsPerPage={3} colWidth="25%" />
      </Main>
    </Layout>
  )
}

export default IndexPage