import * as React from "react"
import styled from "styled-components";
import Markdown from "../markdown";

const HeroStyled = styled.div`
  position:relative;
  overflow:hidden;
  padding-top:var(--gutter-md);
  padding-right:var(--gutter-sm);
  padding-bottom:var(--gutter-sm);
  padding-left:var(--gutter-sm);
  @media (min-width: 32rem){
    padding-left:var(--gutter-md);
    padding-right:var(--gutter-md);
  }
  @media (min-width: 64rem){
    padding-top:var(--gutter-lg);
    padding-right:var(--gutter-xl);
    padding-bottom:var(--gutter-lg);
    padding-left:var(--gutter-xl);
  }
  h1{
    margin:0 0 var(--gutter-sm);
    font-size:var(--font-lg);
    font-weight:400;
    @media (min-width: 32rem){
      font-size:var(--font-xl);
    }
  }
  p{
    margin:0 0 var(--gutter-sm);
    font-size:var(--font-md);
    font-weight:400;
    strong,b{
      font-weight:700;
    }
    &.bio{
      font-size:var(--font-lg);
    }
  }

  &.default{
    color: ${({ theme }) => theme.neutralForeground1};
    h1>a, p>a{
      color: ${({ theme }) => theme.neutralForeground1};
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
  // &.fun{
  //     color: ${({ theme }) => theme.neutralForeground1OnBrand};
  //     background-image:linear-gradient(145deg, ${( {theme} ) => theme.colorBrandBackground1}, ${( {theme} ) => theme.colorBrandBackground2});   

  //     a:not(.button, .social){
  //       color: ${({ theme }) => theme.neutralForeground1OnBrand};
  //       text-decoration: none;
  //       box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHoverOnBrand};
  //       &:hover,&:focus{
  //         color: ${({ theme }) => theme.neutralForeground1OnBrand};
  //         box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHoverOnBrand};
  //       }
  //     }
  // }
  // &.blank, &.cover{
  //     color: ${( {theme} ) => theme.neutralForeground1OnBrand};
  // }
  &.fun{
    color: ${( {theme} ) => theme.neutralForeground1OnBrand};
    background-image:linear-gradient(145deg, ${( {theme} ) => theme.colorBrandBackground1}, ${( {theme} ) => theme.colorBrandBackground2});
    // border-top: solid var(--border-weight) ${( {theme} ) => theme.colorBrandBackground1};
    // border-bottom: solid var(--border-weight) ${( {theme} ) => theme.colorBrandBackground2};
    a:not(.button, .social){
      color: ${({ theme }) => theme.neutralForeground1OnBrand};
      text-decoration: none;
      box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground3OnBrand};
      &:hover,&:focus{
        color: ${({ theme }) => theme.neutralForeground1OnBrand};
        box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground1OnBrand};
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
  left: 0;
  margin:0;
  padding:0;
  bottom: 0;
  right: 0;
  height:100%;
  width: 100%;
  img{
    position: absolute;
    bottom: 0;
    right: 0;
    width:auto;
    height:100%;
    opacity:1.0;
    object-fit:cover;
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
  const showTitle = (title) => {
    if(title){
      return <h1 className="headline"><span>{title}</span></h1>;
    }
  }
  const showBody = (body) => {
    if(body){
      return <p className="body"><span><Markdown value={body} /></span></p>;
    }
  }

  return (
    <HeroStyled className={props.className}>
      <Cover image={props.cover} />
      <div className="body">
        {showTitle(props.title)}
        {showBody(props.body)}
        {props.children}
      </div>
    </HeroStyled>
  )
}
export default Hero