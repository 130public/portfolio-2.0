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
    color: ${({ theme }) => theme.colorTextInverted1};
    border:var(--border-weight) solid ${({ theme }) => theme.colorText1};
    background: ${({ theme }) => theme.colorText1};
    margin-right:0.25rem;
    padding:0 0.25rem;
  }
  .space{
    font-size:0;
  }
  .right{
    padding:0 0.25rem;
    color: ${({ theme }) => theme.colorText1};
    border:var(--border-weight) solid ${({ theme }) => theme.colorText1};
    background: ${({ theme }) => theme.colorTextInverted1};
  }
  .left, .right{
    transition: all var(--durationSlow); var(--curveEasyEase);
  }
  &:hover, &:focus{
    outline:none;
    .right{
      color: ${({ theme }) => theme.colorTextInverted1};
      background: ${({ theme }) => theme.colorText1};
      border-color: ${({ theme }) => theme.colorText1};
    }
    .left{
      color: ${({ theme }) => theme.colorText1};
      background: ${({ theme }) => theme.colorTextInverted1};
      border-color: ${({ theme }) => theme.colorText1};
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