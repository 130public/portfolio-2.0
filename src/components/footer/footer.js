import React from "react";
import styled from "styled-components";
import Brand from "../Brand";

const FooterStyled = styled.footer`
  display:flex;
  @extend .u-gutters;
  @extend .u-spacers--inside;
  padding-top:var(--gutter-md);
  padding-right:var(--gutter-sm);
  padding-bottom:var(--gutter-md);
  padding-left:var(--gutter-sm);
  
  @media (min-width: 32rem){
    padding-left:var(--gutter-md);
    padding-right:var(--gutter-md);
  }
  @media (min-width: 64rem){
    padding-left:var(--gutter-xl);
    padding-right:var(--gutter-xl);
  }
  > div {
    flex: 1 1 50%;
  }
  div:last-child{
    text-align:right;
  }
`

const Footer = (props) => {
  return(
    <FooterStyled>
      <Brand left="THE" right="END" to="/colophon" />
      <div>
        {props.children}
      </div>
    </FooterStyled>
  )
}
export default Footer;