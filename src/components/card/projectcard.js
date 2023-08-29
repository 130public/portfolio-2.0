import * as React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const LinkStyled = styled(Link)`
  margin:0;
  padding:0;
  color: ${( {theme} ) => theme.neutralForeground1};
  border:2px solid ${( {theme} ) => theme.neutralStroke1};
  background: ${( {theme} ) => theme.neutralBackground1};
  display:flex;
  flex-direction: column;
  overflow:hidden;
  height:100%;
  &:hover, &:focus{
    outline:none;
    cursor: pointer;
    color: ${({ theme }) => theme.colorLinkHover};
    border-color: ${({ theme }) => theme.colorLinkHover};
    background: ${( {theme} ) => theme.neutralBackground2};
    figure{
      border-color: ${({ theme }) => theme.colorLinkHover};
      background: ${({ theme }) => theme.colorLinkHover};
    }
    .title,.link{
      border-bottom:2px solid ${({ theme }) => theme.colorLinkHover};
    }
    .title, .body{
      color: ${({ theme }) => theme.colorLinkHover};
    }
  }  
`

const Figure = styled.figure`
  position: relative;
  display:inline-block;
  margin:0;
  padding:56.25% 0 0 0;
  width:100%;
  overflow: hidden;
  border-bottom: 2px solid  ${( {theme} ) => theme.neutralStroke1};
  background:  rgba(0,0,0,0.8);
  transition: all var(--curveDecelerateMid) var(--durationUltraSlow);
  img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
    transition: all var(--curveDecelerateMid) var(--durationUltraSlow);
    filter: grayscale(100%);
    mix-blend-mode: screen;
  }
  figcaption{
    position:absolute;
    top:0;
    left:0;
    font-family:var( --theme-font-secondary);
    font-size:var(--font-xs);
    text-transform:uppercase;
    padding:0.25rem 0.5rem;
    color:white;
    background:var(--theme-color-primary);
    z-index:1;
  }
`

const Header = styled.header`
  font-size:var(--font-md);
  font-weight:700;
  padding: var(--gutter-sm) var(--gutter-sm) var(--gutter-xs);
  
`

const Body =  styled.section`
  padding: var(--gutter-xs) var(--gutter-sm) var(--gutter-sm);
`
const LinkText = styled.span`
  &:hover{
    text-decoration:underline;
  }
`
const CoverImage = (props) => {
    return (
      <Figure>
        <img src={props.cover} />
        <figcaption>{props.caption}</figcaption>
      </Figure>
    )
}

const ProjectCard = (props) => {
    const {title, slug, client, cover, description} = props.hit;
    return (
      <LinkStyled to={'/projects/'+slug}>
        <CoverImage cover={cover} caption={client} />
        <Header>
          <h3>{title}</h3>
        </Header>
        <Body>
          {description}
        </Body>
      </LinkStyled>
    );
  }
export default ProjectCard;