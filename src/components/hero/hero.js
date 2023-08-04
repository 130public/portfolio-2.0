import * as React from "react"
import styled from "styled-components";
import Markdown from "../markdown";

const HeroStyled = styled.div`
  position:relative;
  padding-top:var(--gutter-sm);
  padding-right:var(--gutter-md);
  padding-bottom:var(--gutter-lg);
  padding-left:var(--gutter-md);
  &.default{
    color:white;
    background: ${({ theme }) => theme.themeColorPrimary};
    a{
      color: ${({ theme }) => theme.textSecondary};
      text-decoration: underline;
    }
  }
  &.project{
    margin:0;
    padding:0 var(--gutter-md);
    .body{
      padding-right:var(--gutter-md);
      padding-bottom:var(--gutter-sm);
      padding-left:var(--gutter-md);
    }
  }
  &.invert{
    color: ${( {theme} ) => theme.textPrimary};
    a{
      color: ${( {theme} ) => theme.textSecondary};
      text-decoration: underline;
    }
    padding-right:var(--gutter-md);
    padding-left:var(--gutter-md);
  }
  &.fun{
      color:white;
      background-image:linear-gradient(145deg, ${( {theme} ) => theme.themeColorPrimary}, ${( {theme} ) => theme.themeColorSecondary});
      a {
        color: ${( {theme} ) => theme.textSecondary};
        box-shadow: inset 0 var(--shadow-weight) 0 0 ${( {theme} ) => theme.linkPrimary};
        &:hover,&:focus{
          box-shadow: inset 0 var(--shadow-weight) 0 0 ${( {theme} ) => theme.textSecondary};
        }
      }
  }
  &.blank{
      color: ${( {theme} ) => theme.textPrimary};
  }
  h1{}
  p{
    margin:0;
    font-size:var(--font-md);
  }
`
const CoverStyled = styled.figure`
  position:relative;
  margin:0;
  padding:0;
  img{
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`

const Cover = (props) => {
  const { image } = props;
  
  if(typeof image === 'string') {
    return (
      <CoverStyled><img src={image} alt="" /></CoverStyled>
    );
  } else {
    return '';
  } 
  
}



const Hero = (props) => {
  return (
    <HeroStyled className={props.className}>
      <cover image={props.cover} />
      <div className="body">
        <h1 className="headline">{props.title}</h1>
        <p><Markdown value={props.body} /></p>
        {props.children}
      </div>
    </HeroStyled>
  )
}
export default Hero