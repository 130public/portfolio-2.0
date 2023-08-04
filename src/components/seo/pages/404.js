import * as React from "react";

import Layout from "../templates/layout";
import Main from "../templates/main";

import Hero from "../components/hero";

// markup
const NotFoundPage = (props) => {
  
  return (
    <Layout location={props.location}>
      <Hero className="default" title="404" body="😔 Sorry. we couldn’t find what you were looking for."/>
      <Main>
        Add search and page list
      </Main>
    </Layout>
  )
}

export default NotFoundPage
