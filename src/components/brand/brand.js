import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

// styles
const BrandLink = styled(Link)`
  position: relative;
  margin-right:var(--gutter-sm);
  font-size:var(--font-xs);
  padding-top: 4px;
  font-family:var(--theme-font-secondary);
  font-weight:700;
  text-transform:uppercase;
  cursor:pointer;
  box-shadow:none;
  .left{
    color: ${({ theme }) => theme.neutralForeground1};
    border:var(--border-weight) solid ${({ theme }) => theme.neutralForeground1};
    background: ${({ theme }) => theme.neutralBackground2};
    margin-right:0.25rem;
    padding:0 0.25rem;
  }
  .space{
    font-size:0;
  }
  .right{
    padding:0 0.25rem;
    color: ${({ theme }) => theme.neutralForegroundInverted1};
    border:var(--border-weight) solid ${({ theme }) => theme.neutralBackgroundInverted1};
    background: ${({ theme }) => theme.neutralBackgroundInverted1};
  }
  .left, .right{
    transition: all var(--durationSlow); var(--curveEasyEase);
  }
  &:hover, &:focus{
    outline:none;
    box-shadow:none;
    .right{
      color: ${({ theme }) => theme.neutralForeground1};
      border-color: ${({ theme }) => theme.neutralForeground1};
      background: ${({ theme }) => theme.neutralBackground2};
      
    }
    .left{
      color: ${({ theme }) => theme.neutralForegroundInverted1};
      border:var(--border-weight) solid ${({ theme }) => theme.neutralBackgroundInverted1};
      background: ${({ theme }) => theme.neutralBackgroundInverted1};
      
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