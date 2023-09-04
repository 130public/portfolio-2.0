import * as React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import Layout from "../../templates/layout";
import Main from "../../components/main";

import Hero from "../../components/hero";
import Cover from "./human-ai-experience/background.avif";
import YoutubeEmbed from "../../components/embed/youtube";

const Intro = styled.div`
  h1,h2{
    margin:0;
    padding:0;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  div{
    flex: 2 1;
  }
  div:last-child{
    flex: 1 2;
  }
`


const Role = styled.div`
  margin: 0 0 0;
  padding: var(--gutter-xs) var(--gutter-sm);
  color:var(--text-primary);
  border-width:0 0 0 4px;
  border-style:solid;
  border-color:  ${({ theme }) => theme.neutralStroke1};
  font-size: var(--font-xs);
`

const HAXHero = styled(Hero)`
  figure{background-color: #f2f2f4;}
`;

// markup
const HAX = (props) => {
  
  return (
    <Layout location={props.location}>
      <HAXHero className="default" cover={Cover} title="" body="">
        <Intro>
          <h1><acronym title="Human AI Experience">HAX</acronym> Toolkit design patterns</h1>
          <h2></h2>
        </Intro>
      </HAXHero>
      <Main>
        <Details>
          <div>
          <h3>Hands-on tools for building effective human-AI experiences</h3>
          The HAX Toolkit is a set of tools to support you throughout the journey of creating user-facing AI. Contributing designer to the <a href="https://www.microsoft.com/en-us/ai/our-approach?activetab=pivot1%3aprimaryr5">Microsoft Aether</a> Human-AI Interaction working group devoted to addressing the challenges and opportunities presented by AI innovations.
          </div>
          <Role>
            <span>Client - Microsoft<br/>
            Role - Contributing designer<br/>
            Project type - Design research<br/>
            Date - 2020-12-01<br/></span>
            Skills - Responsible AI, ...
          </Role>
        </Details>
        
        <h3>HAX Design Patterns</h3>

        <p>A set of flexible solutions to recurring human-AI interaction problems. The HAI Design Patterns are common ways of implementing the <a href="https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/">Guidelines for Human-AI Interaction</a>.</p>

        <YoutubeEmbed url="https://www.youtube.com/embed/JppYmctp0a8?si=YSFTe80xQVmYCV4y&t=827s" />

        <h3>What can I do with the HAX Design Patterns?</h3>

        <p>Given a guideline you wish to implement in a user-facing AI system, review the patterns for that guideline, pick one or more patterns, and follow their directions to create human-AI interaction that applies that guideline. The patterns are UI-independent and can be implemented in a variety of systems and interfaces.</p>

        <h3>When should my team use the HAX Design Patterns?</h3>

        <p>We recommend referring to the patterns as your team is defining requirements for implementing the Guidelines or in the very early prototyping stages. The HAX Design Patterns require collaboration between UX Designers, PM, and AI/ML practitioners.</p>
      </Main>
    </Layout>
  )
}

export default HAX
