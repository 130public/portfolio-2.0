import React, { useState } from "react"
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, Configure, SearchBox } from 'react-instantsearch-dom';

import {ResourceCard} from '../card';

const HitsStyled = styled(Hits)`
  ul{
    margin:0;
    padding:0;
    display: grid;
    width: 100%;
    flex-flow: row wrap;
    margin-bottom: var(--gutter-sm);
    grid-template-columns: ${(props) => `repeat(auto-fill, minmax(${props.minColWidth || '25%'}, 1fr)) `};
    grid-auto-rows: 1fr;
    grid-gap: var(--gutter-sm);
  }
  li{
    list-style:none;
    display: block;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    flex: 1 0 100%;
    justify-content: center;
  }
`;

const SearchBoxStyled = styled(SearchBox)`
  input[type=search]{
    border-width:0 0 2px 0;
    border-style:solid;
    border-color:black;
    background:none;
    font-size: var(--font-xs);
  }
  button{
    background:none;
    border:none;
    svg{
      height: var(--font-xs);
      width: var(--font-xs);
    }
  }
`;


const searchClient = algoliasearch(
  'Z1PZEF7EGE',
  '810bbd7820b39442cccb8f035c6cf1e0'
);

const Hit = (props) => {
  return (
    <>  
      <ResourceCard cardType="resource" {...props} />
    </>
  );
}

const Resources = (props) => {
  return (
    <>
      <InstantSearch 
        searchClient={searchClient}
        indexName={"Resource"}
      >
        {props.showQuery == true &&
          <>
            <h2>Results for <u>{props.query}</u></h2>
          </>
        }
        {props.enableSearch == true &&
          <>
            <SearchBoxStyled defaultRefinement={props.query} />
          </>
        }
        <Configure hitsPerPage={props.hitsPerPage || 1000} />
        <HitsStyled minColWidth={props.colWidth || "25%"} hitComponent={Hit} />
      </InstantSearch>
    </>
  );
}

export default Resources