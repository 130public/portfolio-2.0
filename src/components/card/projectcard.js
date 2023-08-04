import * as React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const LinkStyled = styled(Link)`
  margin:0;
  padding:0;
  color:black;
  border:2px solid black;
  display:flex;
  flex-direction: column;
  overflow:hidden;
  height:100%;
  &:hover,&:focus{
    outline:none;
    cursor: pointer;
    border-color:var(--theme-color-primary);
    figure{
      border-color:var(--theme-color-primary);
      background:var(--theme-color-primary);
    }
    .title,.link{
      border-bottom:2px solid var(--theme-color-primary)
    }
    .title,.body{
      color:var(--theme-color-primary);
    }
  }
  &:visited{
    border-color:var(--theme-color-secondary);
    figure{
      border-color:var(--theme-color-secondary);
      background:var(--theme-color-secondary);
    }
    .title,.link{
      border-bottom:2px solid var(--theme-color-secondary)
    }
    .title,.body{
      color:var(--theme-color-secondary);
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
  border-bottom: 2px solid black;
  transition:all 500ms;
  background:var(--theme-color-text);
  img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
    transition: all 500ms;
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
        <img src={props.thumbnail} />
        <figcaption>{props.caption}</figcaption>
      </Figure>
    )
}

const ProjectCard = (props) => {
    const {title, slug, role, thumbnail, client, description} = props.frontmatter;
    return (
      <LinkStyled to={'/projects/'+slug}>
        <CoverImage thumbnail={thumbnail} caption={client} />
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