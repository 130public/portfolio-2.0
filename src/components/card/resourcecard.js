import * as React from "react"
import styled from 'styled-components'
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const CardLink = styled(Link)`
  margin:0;
  padding:0;
  color:var(--text-primary);
  background:white;
  border:2px solid var(--text-primary);
  display:flex;
  flex-direction: column;
  overflow:hidden;
  height:100%;
  .title, .link{
    display:inline;
    box-decoration-break: clone;
  }
  &:hover, &:focus{
    outline:none;
    cursor: pointer;
    border-color:var(--link-primary);
    figure{
      border-color:var(--link-primary);
      background:var(--link-primary);
    }
    .title, .link, .body{
      color:var(--link-primary);
    }
    .title, .link{
      box-shadow: inset 0 var(--shadow-weight) 0 0 var(--link-primary);
    }
  }
  &:visited{
    border-color:var(--link-secondary);
    figure{
      border-color:var(--link-secondary);
      background:var(--link-secondary);
    }
    .title, .link, .body{
      color:var(--link-secondary);
    }
    .title, .link{
      box-shadow: inset 0 var(--shadow-weight) 0 0 var(--link-secondary);
    }
    .title, .body{
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
    display:none;
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

const LinkText = styled.span``

const hasFigure = (thumbnail) => {
    return (
      <Figure>
        <img src={thumbnail.fluid.src} title={thumbnail.title} alt={thumbnail.description}/>
      </Figure>
    )
}

const ResourceCard = (props) => {
    const {title, description, author, skills, source, thumbnail, __position} = props.hit;
    return (
      <CardLink to={source} aria-label={'Item '+__position+' of '+props.hitsPerPage+', External resource to '+title}>
        {hasFigure(thumbnail)}
        <Header id={title}>
          <h3 className="title">{title}</h3>
        </Header>
        <Body className="body">
          {description !== undefined && <p>{description}</p> }
          {source !== undefined &&
            <LinkText className="link">External link <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} /></LinkText>
          }
        </Body>
      </CardLink>
    );
  }
export default ResourceCard;