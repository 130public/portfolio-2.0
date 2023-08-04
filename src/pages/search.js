import * as React from "react";
import queryString from "query-string";

import Layout from "../templates/layout";
import Main from "../templates/main";

import Hero from "../components/hero";
import Resources from "../components/resources";

// markup
const SearchPage = (props) => {
  const queryObj = queryString.parse(props.location.search);
  return (
    <Layout location={props.location}>
      <Hero className="fun" title="Search" body="">
        
      </Hero>
      <Main>
        <Resources enableSearch={true} query={queryObj.query} hitsPerPage={1000} colWidth="25%" />
      </Main>
    </Layout>
  )
}

export default SearchPage