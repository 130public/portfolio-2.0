import * as React from "react"
import styled from "styled-components";
import Markdown from "../markdown";

const HeroStyled = styled.div`
  position:relative;
  padding-top:var(--gutter-lg);
  padding-right:var(--gutter-xl);
  padding-bottom:var(--gutter-lg);
  padding-left:var(--gutter-xl);

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
    color: ${({ theme }) => theme.colorTextInverted1};
    border-bottom: solid var(--border-weight) ${( {theme} ) => theme.colorBackground1};
    background-image:linear-gradient(145deg, ${( {theme} ) => theme.neutralBackgroundInverted1}, ${( {theme} ) => theme.neutralBackgroundInverted2}); 

    h1>a, p>a{
      color: ${({ theme }) => theme.colorTextInverted1};
      text-decoration: none;
      box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground2};
      &:hover,&:focus{
        color: ${({ theme }) => theme.colorTextInverted1};
        box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorForeground1};
      }
    }
  }
  &.project{
    
  }
  &.fun{
      color: ${({ theme }) => theme.colorTextInverted1};
      background-image:linear-gradient(145deg, ${( {theme} ) => theme.colorBackground1}, ${( {theme} ) => theme.colorBackground2});   

      h1>a, p>a{
        color: ${({ theme }) => theme.colorTextInverted1};
        text-decoration: none;
        box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground2};
        &:hover,&:focus{
          color: ${({ theme }) => theme.colorTextInverted1};
          box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground1};
        }
      }
  }
  &.blank{
      color: ${( {theme} ) => theme.colorText};
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