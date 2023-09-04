import * as React from "react";
import queryString from "query-string";
import styled from 'styled-components'

import Layout from "../templates/layout";
import Main from "../components/main";

import Hero from "../components/hero";
import Results from "../components/results";

const SearchHeader = styled(Hero)`
  h1{
    margin:0;
    padding:0;
  }
  p{
    margin:0;
    padding:0;
    font-size: var(--font-md);
  }
  p>span{
    &:before,&:after{
      position:relative;
      top:-5px;
      padding:0 2px;
      display:inline-block;
      font-size: var(--font-sm);
    }
    &:before{
      content:"“";
    }
    &:after{
      content:"”";
    }
  }
`;

// markup
const SearchPage = (props) => {
  const queryObj = queryString.parse(props.location.search);
  return (
    <Layout location={props.location}>
      <SearchHeader className="fun" title="Search">
        <p>Query for <span>{queryObj.query}</span></p>
      </SearchHeader>
      <Main>
        <Results cardType="default" index={['Project','Resource']} showQuery={false} enableSearch={false} query={queryObj.query} hitsPerPage={1000} colWidth="30%" />
      </Main>
    </Layout>
  )
}

export default SearchPage