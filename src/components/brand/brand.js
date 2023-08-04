import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

// styles
const BrandLink = styled(Link)`
  position: relative;
  margin-right:var(--gutter-sm);
  font-size:var(--font-xs);
  line-height: var(--font-xs);
  font-family:var(--theme-font-secondary);
  font-weight:700;
  text-transform:uppercase;
  cursor:pointer;
  .left{
    color:white;
    border:var(--border-weight) solid var(--theme-color-text);
    background:var(--theme-color-text);
    margin-right:0.25rem;
    padding:0 0.25rem;
  }
  .space{
    font-size:0;
  }
  .right{
    padding:0 0.25rem;
    color:var(--theme-color-text);
    border:var(--border-weight) solid var(--theme-color-text);
    background:white;
  }
  &:hover, &:focus{
    outline:none;
    .left{
      color:var(--theme-color-primary);
      background:white;
      border-color:var(--theme-color-primary);
    }
    .right{
      color:white;
      background:var(--theme-color-primary);
      border-color:var(--theme-color-primary);
    }
  }
`;
const Brand = (props) => {
  const {to} = props;
  return (
    <BrandLink to={to}>
      <span className="left">{props.left}</span>
      <span className="space">&nbsp;</span>
      <span className="right">{props.right}</span>
    </BrandLink>
  )
}
export default Brand