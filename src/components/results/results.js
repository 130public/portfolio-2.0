import React, { useState } from "react"
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Configure, SearchBox, Index } from 'react-instantsearch-dom';

import Card from '../card';

const Header = styled.div`
  display:flex;
  width:100%;
  > div{
    flex:1 0;
  }
  div:last-child{
    display:flex;
    align-items: center;
    justify-content: right;
  }
`;

const HitsStyled = styled(Hits)`
  ul{
    margin:0;
    padding:0;
    display: grid;
    width: 100%;
    margin-bottom: var(--gutter-sm);
    gap: var(--gutter-sm);
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    @media (min-width: 46rem){
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
    li{
      display: block;
      list-style:none;
    }
  }
`;

const SearchBoxStyled = styled(SearchBox)`
  input[type=search]{
    border-width:0 0 2px 0;
    border-style:solid;
    border-color:black;
    background:none;
    font-size: var(--font-xs);
    &:focus{
      outline:none;
      border-color:red;
    }
  }
  button{
    background:none;
    border:none;
    svg{
      height: var(--font-xs);
      width: var(--font-xs);
    }
  }
  button[type=reset]{
    display:none;
  }
`;


const searchClient = algoliasearch(
  'Z1PZEF7EGE',
  '810bbd7820b39442cccb8f035c6cf1e0'
);

const Hit = (props) => {
  return (
    <>  
      <Card {...props} />
    </>
  );
}

const Results = (props) => {
  const {index} = props;

  const IndexHeader = (props) => {
    if(index.length > 1) {
      return <h3>Results for <b>{props.index}</b></h3>
    }
  }

  return (
    <>
      <InstantSearch 
        searchClient={searchClient}
        indexName={props.index[0]}
      >
        <Header>
          {props.showQuery === true &&
            <div>
              <h2>Query: <b>{props.query}</b></h2>
            </div>
          }
          {props.enableSearch === true &&
            <div>
              <SearchBoxStyled defaultRefinement={props.query} />
            </div>
          }
        </Header>
        {props.index.map((item) => (
          <>
            <IndexHeader index={item}/>
            <Index indexName={item}>
              <Configure hitsPerPage={props.hitsPerPage || 1000} />
              <HitsStyled minColWidth={props.colWidth || "20%"} hitComponent={({ hit }) => (<Hit {...hit} cardType={item} />)} />
            </Index>
          </>
        ))}
      </InstantSearch>
    </>
  );
}

export default Results