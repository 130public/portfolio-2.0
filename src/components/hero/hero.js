import * as React from "react"
import styled from "styled-components";
import Markdown from "../markdown";

const HeroStyled = styled.div`
  position:relative;
  padding-top:var(--gutter-lg);
  padding-right:var(--gutter-xxl);
  padding-bottom:var(--gutter-lg);
  padding-left:var(--gutter-xxl);
  overflow:hidden;
  h1{
    margin:0 0 var(--gutter-sm);
    font-size:var(--font-xl);
    font-weight:400;
  }
  p{
    margin:0 0 var(--gutter-sm);
    font-size:var(--font-md);
    &.bio{
      font-size:var(--font-lg);
    }
  }

  &.default{
    color: ${({ theme }) => theme.neutralForeground1OnBrand};
    border-bottom: solid var(--border-weight) ${( {theme} ) => theme.colorBrandBackground1};
    background-image:linear-gradient(145deg, ${( {theme} ) => theme.neutralBackgroundInverted1}, ${( {theme} ) => theme.neutralBackgroundInverted2}); 

    h1>a, p>a{
      color: ${({ theme }) => theme.neutralForeground1OnBrand};
      text-decoration: none;
      box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground2};
      &:hover,&:focus{
        color: ${({ theme }) => theme.neutralForeground1OnBrand};
        box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorBrandForeground1};
      }
    }
  }
  &.project{
    
  }
  &.fun{
      color: ${({ theme }) => theme.neutralForeground1OnBrand};
      background-image:linear-gradient(145deg, ${( {theme} ) => theme.colorBrandBackground1}, ${( {theme} ) => theme.colorBrandBackground2});   

      a:not(.button, .social){
        color: ${({ theme }) => theme.neutralForeground1OnBrand};
        text-decoration: none;
        box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHoverOnBrand};
        &:hover,&:focus{
          color: ${({ theme }) => theme.neutralForeground1OnBrand};
          box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHoverOnBrand};
        }
      }
  }
  &.blank, &.cover{
      color: ${( {theme} ) => theme.neutralForeground1OnBrand};
  }
  &.cover{
    background-image:linear-gradient(145deg, ${( {theme} ) => theme.colorBrandBackground1}, ${( {theme} ) => theme.colorBrandBackground2}); 
    border-bottom: solid var(--border-weight) ${( {theme} ) => theme.colorBrandBackground1};
    a:not(.button, .social){
      color: ${({ theme }) => theme.neutralForeground1OnBrand};
      text-decoration: none;
      box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground2OnBrand};
      &:hover,&:focus{
        color: ${({ theme }) => theme.neutralForeground1OnBrand};
        box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHoverOnBrand};
      }
    }
    .headline span, .body span{
      // padding:2px;
      //background: rgba(19,17,92,0.75);
      // background:${( {theme} ) => theme.neutralForeground1OnBrand};
    }
  }
`
const CoverStyled = styled.figure`
  position:absolute;
  top:0;
  left: 0;
  margin:0;
  padding:0;
  bottom: 0;
  right: 0;
  height:100%;
  width: 100%;
  img{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    width:175vw;
    height:auto;
    filter: grayscale(100%);
    opacity:1.0;
  }
  z-index:-1;
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
      <Cover image={props.cover} />
      <div className="body">
        <h1 className="headline"><span>{props.title}</span></h1>
        <p className="body"><span><Markdown value={props.body} /></span></p>
        {props.children}
      </div>
    </HeroStyled>
  )
}
export default Hero