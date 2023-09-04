import * as React from "react"
import styled from 'styled-components';

const TextLink = (props) => (
  <a {...props}>
    {props.children}
  </a>
);

const SkipStyled = styled(TextLink)`
  position: relative;
  display:block;
  height:0;
  width:100%;
  padding:0 24px;
  font-size:24px;
  font-weight: bold;
  border-bottom:var(--border-weight) solid ${({ theme }) => theme.neutralForegroundInverted1};
  background: ${({ theme }) => theme.neutralBackground2};
  transition: all var(--durationSlow) var(--curveEasyEase);
  text-decoration: none;
  overflow:hidden;
  span{
    color: ${({ theme }) => theme.colorLinkRest};
  }
  &:focus, &:hover {
    margin-bottom: var(--border-weight);
    height: 80px;
    line-height: 80px;
    outline: none;
    text-decoration: none;
    box-shadow: none;
    border-bottom: var(--border-weight) solid ${({ theme }) => theme.neutralForeground1};
    span{
      color: ${({ theme }) => theme.colorLinkRest};
      box-shadow: inset 0 var(--shadow-weight) 0 0 ${({ theme }) => theme.colorLinkHover};
    } 
  }
  z-index:100;
`
const Skip = (props) => {
    return (
      <SkipStyled {...props}>
        <span>Skip to main content</span>
      </SkipStyled>
    )

}
export default Skip