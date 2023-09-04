import * as React from "react";
import styled from "styled-components";

/// https://css-tricks.com/line-clampin/
const TruncatedContainer = styled.div`
    --line-clamp: ${props => props.lines};
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp, 1);
    -webkit-box-orient: vertical;
    word-break: var(--word-break, 'none');
    overflow: hidden;
    hyphens: auto;
    text-align: var(--align, left);
    
    // Automatically use "word-break: break-all" for single-lines
    // (https://css-tricks.com/css-switch-case-conditions)
    --is-single-line: 1 - Clamp(0, Calc(var(--line-clamp) - 1), var(--line-clamp));
    --delay: Calc(-1s * (var(--is-single-line, 1) - 1)); 
    animation: states 1s var(--delay) paused; 
    
    @keyframes states {
        0% { word-break: break-all; }       
    }
  
    font-size: var(--font-size, 1em);
    width:100%;
    text-shadow: 1px 3px 0 rgba(black, .3);
    position: relative; 
    background: inherit;
    
    &:hover{
    //   outline: 1px dotted ${( {theme} ) => theme.neutralBackgroundInverted2};
    //   pointer-events: none;
    }
    // &:before{
    //     top: 10rem;
    //     left: 0;
    //     z-index: 99999;
    //     content: attr(title);
    //     padding: 0.5em;
    //     width: 200px;    /* change it */
    //     overflow: hidden;
    //     word-wrap: break-word;
    //     font-size: inherit;
    //     color: #FFF;
    //     text-align: center;
    //     background-color: #222;
    //     box-sizing: border-box;
    // }
    // fade text's last word, if clamped () 
    &::after{
      content: '';
      width: 0;
      height: 2ch;
      position: absolute;
      bottom: 0;
      right: 0;
      pointer-events: none;
      //background: linear-gradient(90deg, transparent, var(--bg));
      background: inherit; // it's easier to work with inheritance 
      mask-image: linear-gradient(to left, black, transparent);
      transition: .2s;
    }
    
    &.clamped{
      &::after{
        width: 3em;
      }
    }
    
    > span{
      text-decoration: underline;
    }

  `;

  const Truncate = (props) => {

    return (
        <TruncatedContainer className={props.className} dom={props.dom} lines={props.lines} title={props.title}>
            <dom></dom>{props.children}
        </TruncatedContainer>
    );
  }

  export default Truncate;