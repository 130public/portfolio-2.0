import React from "react"
import ReactMarkdown from "react-markdown";
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../layout"
import Main from "../../components/main"
import Hero from "../../components/hero"
import TransitionLink from '../../components/transitionlink';
import HashLink from  "../../components/hash";


const ProjectHero = styled(Hero)`
  &.gutter-0{
    padding-top:0;
    padding-bottom:0;
    border:0;
  }
`
const Breadcrumbs = styled.div`
  position:absolute;
  top: calc(var(--gutter-sm) * -1);
  display:flex;
  a{
    color: ${({theme}) => theme.neutralForeground3};
    margin-right:var(--gutter-sm);
    font-size:var(--font-xs);
    box-shadow:none !important;
    transition: all var(--durationFast) var(--curveEasyEase);
    span{
      position:relative;
      top:-3px;
      display:inline-block;
      opacity:0.0;
      transition: all var(--durationFast) var(--curveEasyEase);
    }
    &:hover,&:focus{
      color: ${({theme}) => theme.colorLinkHover};
      span{
        opacity:1.0;
      }
    }
  }
`
const Presentation = styled.div`
  position:relative;
  margin: var(--gutter-md) 0;
  display:flex;
  flex-wrap:wrap;'
`
const Snapshot = styled.div`
  padding: 0 var(--gutter-md) 0 0;
  flex:1 2 50%;
  h1{
    margin-top:0;
    padding-top:0;
  }
  img{
    margin: var(--gutter-xs) 0 0;
    height:auto;
    width:100%;
    object-fit:fill;
  }
`
const Role = styled.div`
  flex: 1 1 25%;
  margin: 1rem 0 0;
  color:var(--text-primary);
  padding-left: var(--gutter-md);
  border-width:0 0 0 4px;
  border-style:solid;
  border-color: ${({theme}) => theme.neutralForeground3};
  font-family:var(--theme-font-secondary);
  table{
    margin:0;
    padding:0;
    border-collapse: collapse;
    font-size:var(--font-xs);
    font-weight:400;
  }
  th,td{
    vertical-align:top;
    padding:0 0 var(--gutter-sm) 0;
  }
  tr td:first-child{
    text-align:left;
    font-weight:700;
    padding-top:8px;
    padding-right: var(--gutter-md);
  }
  ul,li{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
    font-size:var(--font-xs);
    font-weight:400;
  }
`

const Intro = styled.div`
  p{
    font-size:var(--font-xl);
  }
`;

const MainMarkdown = styled(Main)`
  img{
    height:auto;
    width:70%;
    margin:0 auto; 
    display:block;
  }
`

const projectTemplate = (props) => {
  const { title, description, body, thumbnail, skills, type, role, date } = props.data.contentfulProject;

  const ShowBody = (props) => {
    if (typeof props.body !== 'undefined' && props.body !== 'undefined') {
      return (
        <ReactMarkdown>
          {props.body}
        </ReactMarkdown>
      )
    }
  }

  return (
    <Layout>
        <ProjectHero className="fun gutter-0">
          <Presentation>
            <Snapshot>
              <Breadcrumbs>
                <TransitionLink to="/projects">↩ <span>Back to projects</span></TransitionLink>
              </Breadcrumbs>
              <h1>{title}</h1>
              <img src={thumbnail.file.url} title={thumbnail.title} />
            </Snapshot>
            <Role className="inverse">
              <table>
                <thead className="sr-only">
                  <th>Label</th>
                  <th>Value</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Role</td>
                    <td><HashLink string={role} /></td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td><HashLink string={type} /></td>
                  </tr>
                  <tr>
                    <td style={{paddingTop:0}} >Date</td>
                    <td><span style={{fontFamily:'var(--theme-font-secondary)'}}>{date}</span></td>
                  </tr>
                  <tr>
                    <td>Skills</td>
                    <td>
                      <ul>
                      {skills.map(skill => (<li><HashLink string={skill.name} key={skill.id} /></li>))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Role>
          </Presentation>
        </ProjectHero>
        <MainMarkdown>
          <Intro>
            <p>{description.description}</p>
          </Intro>
          <ShowBody {...body} />
        </MainMarkdown>
    </Layout>
  )
}
export default projectTemplate;

export const projectQuery = graphql`
  query ($slug: String) {
    contentfulProject(slug: { eq: $slug } ) {
      id
      title
      slug
      updatedAt(formatString: "Y-MM-DD")
      description{
        description
      }
      body{
        body
      }
      date(formatString: "MMMM YYYY")
      skills {
        name
        id
      }
      type
      thumbnail {
        title
        description
        file {
          url
        }
      }
      role
    }
  }
`