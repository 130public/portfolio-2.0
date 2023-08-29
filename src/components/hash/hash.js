import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";

const HashTag = styled(Link)`
  display:inline-block;
  font-size:var(--font-md);
  height: var(--font-lg);
  margin-right:var(--gutter-xs);
  padding-bottom:.25rem;
  color: ${({ theme }) => theme.neutralForegroundInverted1};
  text-decoration:none;
  box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground3};
  transition: all var(--durationFast) var(--curveEasyEase);
  span{
    display:inline-block;
    height: var(--font-lg);
  }
  &:hover, &:focus{
    outline:none;
    box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground1};
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
