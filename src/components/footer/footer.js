import React from "react";
import styled from "styled-components";
import Brand from "../Brand";

const FooterStyled = styled.footer`
  padding-top:var(--gutter-md);
  padding-right:var(--gutter-xl);
  padding-bottom:var(--gutter-md);
  padding-left:var(--gutter-xl);
  @extend .u-gutters;
  @extend .u-spacers--inside;
  border-top:2px solid var(--text-primary);
  
`

const Footer = (props) => {
  return(
    <FooterStyled>
      <Brand left="THE" right="END" to="/colophon" />
      {props.children}
    </FooterStyled>
  )
}
export default Footer;