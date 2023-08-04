import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/layout";
import Main from "../templates/main";

import Seo from "../components/seo";
import Hero from "../components/hero";
import Resources from "../components/resources";

// markup
const ResourcesPage = (props) => {
  const{data,location} = props;
  return (
    <Layout location={location}>
      <Seo
        title={data.contentfulPage.metaTitle}
        description={data.contentfulPage.metaDescription}
      />
      <Hero className="fun" title={data.contentfulPage.title} body={data.contentfulPage.body.body} />
      <Main>
        <h2>Recently read, watched, or listened</h2>
        <Resources enableSearch={false} hitsPerPage={1000} colWidth="25%" />
      </Main>
    </Layout>
  )
}

export default ResourcesPage

export const resourcesPageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "resources" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      body{
        body
      }
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`