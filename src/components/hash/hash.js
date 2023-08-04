import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";

const HashTag = styled(Link)`
  display:inline-block;
  font-size:var(--font-md);
  height: var(--font-lg);
  margin-right:var(--gutter-xs);
  padding-bottom:.25rem;
  color: var(--text-secondary);
  text-decoration:none;
  box-shadow: none;
  span{
    display:inline-block;
    height: var(--font-lg);
  }
  &:hover, &:focus{
    outline:none;
  }
`;

const HashLink = (props) => {
  const url = "/search?query="+encodeURI(props.string);
  return (
    <HashTag aria-label={"Search "+props.string} to={url}>
      <span aria-hidden="true"></span><span>{props.string}</span>
    </HashTag>
  )
}

export {HashTag}
export default HashLink;
