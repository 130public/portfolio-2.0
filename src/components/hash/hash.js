import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";

const HashTag = styled(Link)`
  --text-color: ${({ theme }) => theme.neutralForeground1};
  --text-color-inverse: ${({ theme }) => theme.neutralForegroundInverted1};
  display:inline-block;
  height: var(--font-lg);
  margin-right:var(--gutter-xs);
  padding-bottom:.25rem;
  color: ${props => props.inverse ? 'var(--text-color-inverse)' : 'var(--text-color)'};
  text-decoration:none;
  box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground3};
  transition: all var(--durationFast) var(--curveEasyEase);
  span{
    display:inline-block;
    height: var(--font-lg);
    white-space: nowrap;
  }
  &:hover, &:focus{
    outline:none;
    box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHover};
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
