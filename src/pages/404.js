import * as React from "react";

import Layout from "../templates/layout";
import Main from "../templates/main";

import Hero from "../components/hero";
import Cover from "../assets/wallpaper/cover_06.png";

// markup
const NotFoundPage = (props) => {
  
  return (
    <Layout location={props.location}>
      <Hero className="cover"  cover={Cover} title="404" body="😔 Sorry. we couldn’t find what you were looking for."/>
      <Main>
        Add search and page list
      </Main>
    </Layout>
  )
}

export default NotFoundPage
