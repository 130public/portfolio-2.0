import * as React from "react"
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../templates/layout";
import Main from "../templates/main";

import Seo from "../components/seo";
import Hero from "../components/hero";


const WorkItem = styled.div`
  margin:0;
  padding:24px 0 24px;
  border-top: solid 1px ${( {theme} ) => theme.neutralStroke2};
  h3,p{
    margin:0;
    padding:0;
  }
  &:last-of-type{
    border:0;
  }
  time{
    color: ${( {theme} ) => theme.colorForeground1};
  }
`;

// markup
const ResumePage = (props) => {
  const {data, location} = props;
  return (
    <Layout location={location}>
      <Seo
        title={data.contentfulPage.metaTitle}
        description={data.contentfulPage.metaDescription}
      />
      <Hero className="fun" title="Resumé and experience" body={data.contentfulPage.body.body} className="default">
        <p><a href="/assets/jasonjgeiger-resume.pdf">Download PDF resume</a></p>
      </Hero>
      <Main>
          <article>
            <h2>Work History</h2>
            <WorkItem>
              <h3>Microsoft - Principal Designer - Windows Design</h3>
              <time>July 2023 - Present</time>
              <p>Designing the future of the Windows 11 operating system.</p>
            </WorkItem>
            <WorkItem>
              <h3>Microsoft - Principal Designer - Microsoft Education</h3>
              <time>July 2022 - June 2023</time>
              <p>Designing education learning tools - focused on strategy, planning, research, art direction, and product design.</p>
            </WorkItem>
            <WorkItem>
              <h3>Microsoft - Principal Design Lead - Career Coach, Microsoft Teams app</h3>
              <time>August 2019 - September 2022</time>
              <p>Lead designer responsible for design strategy & product design for Microsoft Career Coach. Have worked to implement design processes that prioritize ethical AI and accessibility through iterative design, usability testing, and engineering collaboration.</p>
            </WorkItem>
            <WorkItem>
              <h3>Microsoft - Senior UX Design Lead - Microsoft Certifications</h3>
              <time>October 2016 - July 2019</time>
              <p>UX designer with Worldwide Learning, creating innovative learning solutions that empower people to gain influential skills for the 21st century job force.</p>
            </WorkItem>
						<WorkItem>
              <h3>Fisher - Senior Interactive Designer/Developer &amp; Team Lead</h3>
              <time>April 2012 - October 2016</time>
              <p>At Fisher, I work as an Interactive Designer &amp; Digital Strategist helping to Develop interactive strategy, Define use cases and UX, Create information architecture, Develop wireframe UI and prototyping, and produce Digital interactive environments.</p>
            </WorkItem>
						<WorkItem>
              <h3>Esser Design - Interactive Designer</h3>
              <time>October 2010 - April 2012</time>
              <p>As an interactive designer I helped the design team develop strategy and execute digital projects for web, mobile and physical environments. My primary roles included: creating use cases, persona development, user experience, user interface, focus group concepting and wireframes/prototypes.</p>
            </WorkItem>
						<WorkItem>
              <h3>AntalMedia - Designer/Developer</h3>
              <time>September 2007 - October 2010</time>
              <p>As member of AntalMedia's interactive &amp; touch division, my design work focused on interface and web applications. I worked with the design team to produce aesthetic and functional internet based environments. Worked with several education based start-ups to create a digital presence and develop content and execution strategies.</p>
            </WorkItem>
						<WorkItem>
              <h3>Bennett &amp; Hastings - Book Design Intern / Interactive Designer</h3>
              <time>June 2008 - September 2008</time>
              <p>Received the intern position as a book designer. During the internship I helped concept and plan an e-commerce website with Bennett &amp; Hastings' Design Team.</p>
            </WorkItem>
						<WorkItem>
              <h3>AntalMedia - Development Intern</h3>
              <time>April 2007 - September 2007</time>
              <p>As an intern at AntalMedia I worked closely with the both the design and development teams to execute web and app based products. Through this experience I expanded my knowledge of practical front-end development and began learning object-oriented PHP and basic mySQl database design.</p>
            </WorkItem>
            <h2>Education</h2>
            <WorkItem>
              <h3>Microsoft Certified: Azure Fundamentals</h3>
              <time>2019</time>
              <p>Prove that you understand cloud concepts, core Azure Services, Azure pricing and support, and the fundamentals of cloud security, privacy, compliance, and trust.</p>
            </WorkItem>
						<WorkItem>
              <h3>Arizona State University - Bachelor of Science in Design</h3>
              <time>2003-2009</time>
              <p>I attended the College of Design at Arizona State University. I graduated with a Bachelor of Science in Design, Visual Communication – emphasis on Human Computer Interaction &amp; User Experience. Additional studies in Molecular Bioscience and Biotechnology.</p>
              </WorkItem>
          </article>
      </Main>
    </Layout>
  )
}

export default ResumePage

export const resumePageQuery = graphql`
  query resumePageQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "resume" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      body {
        body
      },
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`