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
  background: ${({ theme }) => theme.neutralBackground2};
  transition: all var(--durationUltraSlow) var(--curveEasyEase);
  text-decoration: none;
  overflow:hidden;
  span{
    color: ${({ theme }) => theme.colorLinkRest};
  }
  &:focus, &:hover {
    height: 80px;
    line-height: 80px;
    outline: none;
    text-decoration: none;
    span{
      color: ${({ theme }) => theme.colorLinkRest};
      box-shadow: inset 0 var(--shadow-weight) 0 0 ${({ theme }) => theme.colorLinkRest};
    } 
  }
`
const Skip = (props) => {
    return (
      <SkipStyled {...props}>
        <span>Skip to main content</span>
      </SkipStyled>
    )

}
export default Skip