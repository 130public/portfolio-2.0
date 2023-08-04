import * as React from "react";
import { graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Layout from "../templates/layout";
import Main from "../templates/main";

import Seo from "../components/seo";
import Hero from "../components/hero";

// markup
const ColophonPage = (props) => {
  const {data} = props;
  return (
    <Layout location={props.location}>
      <Seo
        title={data.contentfulPage.metaTitle}
        description={data.contentfulPage.metaDescription}
      />
      <Hero title={data.contentfulPage.title} body={data.contentfulPage.content.body} style="blank" />
      <Main>
        <table>
          <thead>
          <tr>
              <th>path/file</th>
              <th>size</th>
          </tr>
          </thead>
          <tbody>
          {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
              <td><a href={"https://github.com/jasonjgeiger/portfolio/tree/master/src/"+node.relativePath}>{node.relativePath} <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} /></a></td>
              <td>{node.prettySize}</td>
              {/* <td>{node.extension}</td> */}
              <pre>{JSON.stringify(node,null,2)}</pre>
              </tr>
              
          ))}
          </tbody>
      </table>
      </Main>
    </Layout>
  )
}

export default ColophonPage

export const colophonPageQuery = graphql`
  query colophonPageQuery {
    site {
        siteMetadata {
            title
            url
        }
    }
    contentfulPage(slug: { eq: "the-end" }) {
        title,
        slug,
        content {
            body
        },
        updatedAt(formatString: "Y-MM-DD")
    }
    allFile(
      filter: {extension: {nin: ["pdf", "gif", "png", "jpg"]}}
    ) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`