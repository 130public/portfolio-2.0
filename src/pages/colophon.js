import * as React from "react";
import { graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Layout from "../templates/layout";
import Main from "../components/main";

import Seo from "../components/seo";
import Hero from "../components/hero";
import Table from "../components/table";

// markup
const ColophonPage = (props) => {
  const {data} = props;
  return (
    <Layout location={props.location}>
      <Seo
        title="Colophon"
        description="The details of how the website was built"
      />
      <Hero title="Colophon" className="fun">
        <p><b>The technical details</b> -  This site is statically generated and levearges <a href="https://www.gatsbyjs.org/">Gatsby</a>, <a href="https://contentful.com">Contentful</a> and <a href="https://netlify.com">Netlify</a>. Below you will find the files used to create this portfolio, all sourced from a <a href="https://github.com/jasonjgeiger/portfolio/">GitHub repo</a>. Content is sourced from <a href="https://cdn.contentful.com/spaces/f5w9mtqq7f31/entries?access_token=a12aec36d096af139b079ccf624da1aa40ead6601b28789a5bf66a92489e9ead">this content model</a> and the <a href="https://app.netlify.com/sites/modest-heisenberg-ac867e/deploys">build process</a> is hooked to the repo and content model. The resources index and search are powered by <a href="https://www.algolia.com/">Algolia</a>.</p>
        <p><b>The design details</b> - </p>
      </Hero>
      <Main>
        <Table>
          <thead>
          <tr>
              <th>path/file</th>
              <th>size</th>
              <th>file type</th>
              <th>creation date</th>
          </tr>
          </thead>
          <tbody>
          {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
              <td><a href={"https://github.com/130public/portfolio-2.0/tree/master/src/"+node.relativePath}>{node.relativePath}&nbsp;&nbsp;&nbsp;<FontAwesomeIcon size="xs" icon={faExternalLinkAlt} title="opens external link" /></a></td>
              <td>{node.prettySize}</td>
              {/* <td>{node.extension}</td> */}
              <td>{node.extension}</td>
              <td>{node.birthTime}</td>
              </tr>
              
          ))}
          </tbody>
      </Table>
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
      filter: {extension: {in: ["js", "jsx", "md"]}}
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