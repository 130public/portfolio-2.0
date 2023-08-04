import React from "react";
import styled from "styled-components";
import Brand from "../Brand";

const FooterStyled = styled.footer`
  padding-top:var(--gutter-md);
  padding-bottom:var(--gutter-md);
  @extend .u-gutters;
  @extend .u-spacers--inside;
  border-top:2px solid var(--text-primary);
  
`

const Footer = (props) => {
  return(
    <FooterStyled>
      <Brand left="THE" right="END"/>
      {props.children}
    </FooterStyled>
  )
}
export default Footer;