import * as React from "react"
import styled from "styled-components";

import Brand from "../Brand";
import Navigation from "../navigation";

// styles
const HeaderStyled = styled.header`
  position: relative;
  padding-top:var(--gutter-md);
  padding-right:var(--gutter-md);
  padding-bottom:calc(var(--gutter-md) * 0.8);
  padding-left:var(--gutter-md);
  @extend .u-gutters;
  @extend .u-spacers--inside;
  display:flex;
  flex-flow:row wrap;
  z-index:1;
  
`;
const Header = (props) => {
  return (
    <HeaderStyled {...props}>
      <Brand to="/" left="ONE THIRTY" right="Public"/>
      <Navigation />
    </HeaderStyled>
  )
}

export default Header