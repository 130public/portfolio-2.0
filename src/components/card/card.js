import * as React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Truncate from '../../components/truncate';
import defaultFigure from '../../assets/wallpaper/cover_04.png';

const CardLink = styled(Link)`
  margin:0;
  padding:0;
  color: ${( {theme} ) => theme.neutralForeground1};
  background: ${( {theme} ) => theme.neutralBackground1};
  border:2px solid ${( {theme} ) => theme.neutralStroke1};
  display:flex;
  flex-direction: column;
  overflow:hidden;
  box-shadow:none;
  transition: all var(--curveDecelerateMid) var(--durationUltraSlow);
  height:100%;
  &:hover, &:focus{
    outline:none;
    box-shadow:none;
    cursor: pointer;
    border-color: ${( {theme} ) => theme.colorLinkHover};
    figure{
      border-color: ${( {theme} ) => theme.colorLinkHover};
      background: ${( {theme} ) => theme.colorLinkHover};
    }
    .title{
      color:${( {theme} ) => theme.colorLinkHover};
      text-decoration:underline;
    }
  }
  &:focus{
    .link .string{
      opacity:1.0;
      width:100%;
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
  background:  white;
  transition: all var(--curveDecelerateMid) var(--durationUltraSlow);
  img{
    position:absolute;
    top:0;
    height:100%;
    width:100%;
    transition: all var(--curveDecelerateMid) var(--durationUltraSlow);
    object-fit:cover;
    filter: grayscale(100%);
    mix-blend-mode: multiply;
    background:  ${( {theme} ) => theme.brandForeground1};
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
  position:relative;

  font-size:var(--font-md);
  font-weight:700;
  padding: var(--gutter-sm) var(--gutter-sm) 0;
  .title{
    color: ${( {theme} ) => theme.neutralForeground1};
  }
`

const Body =  styled.section`
  padding: var(--gutter-xs) var(--gutter-sm) var(--gutter-xs);
  p{
    margin:0;
    padding:0 0 var(--gutter-xs);
    color: ${( {theme} ) => theme.neutralForeground1};
  }
`
const LinkText = styled.div`
  overflow:hidden;
  width:100%;
  .overflow{
    position:relative;
    display:block;
    width:100%;
  }
  .string{
    display:block;
    margin-left:20px;
    width:0px;
    opacity:0.0;
    transition: opacity var(--curveDecelerateMid) var(--durationUltraSlow);
    overflow:hidden;
  }
  .icon, .string{
    flex:0 1;
    color: ${( {theme} ) => theme.neutralForeground1};
  }
  .icon{
    position:absolute;
    top:0;
    left:0;
    display:block;
  }
  .string{
    display:block;
    word-wrap: no-wrap;
  }
  text-decoration:none;
  &:hover{
    text-decoration:underline;
  }
`

const CardFigure = (props) => {
    const {thumbnail} = props;
    
    if (typeof thumbnail.file !== 'undefined' && thumbnail.file.url !== 'undefined') {
      return (
        <Figure>
          <img src={'https:'+thumbnail.file.url} title={thumbnail.title} alt={thumbnail.description}/>
        </Figure>
      )
    }else{
      return (
        <Figure>
          <img src={defaultFigure} title="" alt=""/>
        </Figure>
      )
    }
    
}

const ResourceCard = (props) => {
    const {title, description, author, skills, source, thumbnail, __position} = props;
    return (
      <CardLink to={source} aria-label={'Item '+__position+', External resource to '+title}>
        <CardFigure thumbnail={thumbnail}/>
        <Header id={title}>
          <Truncate className="title" dom="h3" lines="2" title={title}>{title}</Truncate>
        </Header>
        <Body className="body">
          {description.description !== undefined && 
            <Truncate dom="p" lines="3" title={description.description}>{description.description}</Truncate> 
          }
          {source !== undefined &&
            <LinkText className="link">
              <div className="overflow">
                <div className="icon"><FontAwesomeIcon size="xs" icon={faExternalLinkAlt} /></div>
                <div className="string">External&nbsp;link</div>
              </div>
            </LinkText>
          }
        </Body>
      </CardLink>
    );
  }

const DefaultCard = (props) => {

  return <>DEFAULT: {JSON.stringify(props)}</>

}

const ProjectCard = (props) => {
    const {title, url, slug, thumbnail, description, __position} = props;
    return (
      <CardLink to={'/projects/'+slug} aria-label={'Item '+__position}>
        <CardFigure thumbnail={thumbnail}/>
        <Header>
          <Truncate className="title" dom="h3" lines="1" title={title}>{title}</Truncate>
        </Header>
        <Body>
          {description.description !== undefined && 
            <Truncate dom="p" lines="3" title={description.description}>{description.description}</Truncate> 
          }
        </Body>
      </CardLink>
    );
  }

const Card = (props) => {
  const {cardType} = props;
  if (cardType === "Resource"){

    return <ResourceCard {...props} />

  } else if (cardType === "Project"){

  return <ProjectCard {...props} />

  } else {

    return <DefaultCard {...props} />;

  }


}
export default Card;