import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";

const List = styled.ul`
  display:inline-block;
  margin:var(--gutter-md) 0 0;
  padding:0;
  li{
    list-style: none;
    display: inline;
    padding-right:var(--gutter-sm);
    a{
      position: relative;
      display: inline-block;
      color:var(--text-secondary);
      padding-bottom:var(--gutter-xs);
      text-decoration:none;
      box-shadow: none;
      outline:none;
      svg{
        height:var(--font-lg);
        width:var(--font-lg);
        transform: scale(1);
        position: relative;
        color:var(--text-secondary);
      }
      &:hover, &:focus{
        svg{
          transition:all 250ms;
          transform: scale(1.1);
        }
        box-shadow: none;
      }
    }
  }
`

const SocialProfiles = (props) => {
    return (
      <List>
        <li><a href="https://www.linkedin.com/in/jasonjgeiger/" >
          <FontAwesomeIcon icon={faLinkedin} size="2x" aria-hidden="true" title="LinkedIn profile" />
          <span className="sr-only">LinkedIn profile</span>
        </a></li>
        <li><a href="https://github.com/jasonjgeiger">
          <FontAwesomeIcon icon={faGithub} size="2x" aria-hidden="true" title="GitHub profile" />
          <span className="sr-only">GitHub profile</span>
        </a></li>
      </List>
    );
  }

export default SocialProfiles;