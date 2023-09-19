import { createGlobalStyle } from 'styled-components';

import GTPressuraLightEOT from "../assets/fonts/gt-pressura/light/gt-pressura-light.eot";
import GTPressuraLightWoff from "../assets/fonts/gt-pressura/light/gt-pressura-light.woff";
import GTPressuraLightTTF from "../assets/fonts/gt-pressura/light/gt-pressura-light.ttf";

import GTPressuraRegularEOT from "../assets/fonts/gt-pressura/regular/gt-pressura-regular.eot";
import GTPressuraRegularWoff from "../assets/fonts/gt-pressura/regular/gt-pressura-regular.woff";
import GTPressuraRegularTTF from "../assets/fonts/gt-pressura/regular/gt-pressura-regular.ttf";

import GTPressuraBoldEOT from "../assets/fonts/gt-pressura/bold/gt-pressura-bold.eot";
import GTPressuraBoldWoff from "../assets/fonts/gt-pressura/bold/gt-pressura-bold.woff";
import GTPressuraBoldTTF from "../assets/fonts/gt-pressura/bold/gt-pressura-bold.ttf";

import GTPressuraMonoLightEOT from "../assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.eot";
import GTPressuraMonoLightWoff from "../assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.woff";
import GTPressuraMonoLightTTF from "../assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.ttf";

import GTPressuraMonoRegularEOT from "../assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.eot";
import GTPressuraMonoRegularWoff from "../assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.woff";
import GTPressuraMonoRegularTTF from "../assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.ttf";

import GTPressuraMonoBoldEOT from "../assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.eot";
import GTPressuraMonoBoldWoff from "../assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.woff";
import GTPressuraMonoBoldTTF from "../assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.ttf";

import SociconEOT from "../assets/fonts/socicon/socicon-webfont.eot";
import SociconWoff from "../assets/fonts/socicon/socicon-webfont.woff";
import SociconTTF from "../assets/fonts/socicon/socicon-webfont.ttf";
import RecoletaRegularTTF from "../assets/fonts/recoleta/recoletaalt-regular.ttf";
import RecoletaSemiboldTTF from "../assets/fonts/recoleta/recoletaalt-semibold.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face{
    font-family:GT Pressura;
    font-weight:300;
    src:url(${GTPressuraLightEOT}?) format("eot"),url(${GTPressuraLightWoff}) format("woff"),url(${GTPressuraLightTTF}) format("truetype")
  }
  @font-face{
    font-family:GT Pressura;
    font-weight:400;
    src:url(${GTPressuraRegularEOT}?) format("eot"),url(${GTPressuraRegularWoff}) format("woff"),url(${GTPressuraRegularTTF}) format("truetype")
  }
  @font-face{
    font-family:GT Pressura;
    font-weight:700;
    src:url(${GTPressuraBoldEOT}?) format("eot"),url(${GTPressuraBoldWoff}) format("woff"),url(${GTPressuraBoldTTF}) format("truetype")
  }
  @font-face{
    font-family:GT Pressura Mono;
    font-weight:300;
    src:url(${GTPressuraMonoLightEOT}?) format("eot"),url(${GTPressuraMonoLightWoff}) format("woff"),url(${GTPressuraMonoLightTTF}) format("truetype")
  }
  @font-face{
    font-family:GT Pressura Mono;
    font-weight:400;
    src:url(${GTPressuraMonoRegularEOT}?) format("eot"),url(${GTPressuraMonoRegularWoff}) format("woff"),url(${GTPressuraMonoRegularTTF}) format("truetype")
  }
  @font-face{
    font-family:GT Pressura Mono;
    font-weight:700;
    src:url(${GTPressuraMonoBoldEOT}?) format("eot"),url(${GTPressuraMonoBoldWoff}) format("woff"),url(${GTPressuraMonoBoldTTF}) format("truetype")
  }
  @font-face{
    font-family:Recoleta Regular;
    src:url(${RecoletaRegularTTF}) format("truetype");
    font-weight:400;
    font-style:normal
  }
  @font-face{
    font-family:Recoleta Semibold;
    src:url(${RecoletaSemiboldTTF}) format("truetype");
    font-weight:400;
    font-style:normal
  }
  @font-face{
    font-family:socicon;
    src:url(${SociconEOT}?) format("eot"),url(${SociconWoff}) format("woff"),url(${SociconTTF}) format("truetype");
    font-weight:400;
    font-style:normal
  }
`;
export const GlobalVars = createGlobalStyle`
  :root {
    --theme-font-primary:"GT Pressura", -apple-system, Arial, sans-serif;
    --theme-font-secondary:"GT Pressura Mono", 'Courier New', Courier, monospace;
    
    --theme-light-swatch: rgba(245, 245, 245, 1.0);
    --theme-dark-swatch: rgba(20, 20, 70, 1.0);

    --screen-max: 120rem;
    --screen-xl: 80rem;
    --screen-lg: 64rem;
    --screen-md: 32rem;
    --screen-sm: 24rem;

    --base-size:20px;
    --font-xs: 0.875rem;
    --font-sm: 1.0rem;
    --font-md: 1.15rem;
    --font-lg: 1.5rem;
    --font-xl: 2.25rem;
    --font-xxl: 3rem;

    --gutter-xs:0.5rem;
    --gutter-sm:1rem;
    --gutter-md:2rem;
    --gutter-lg:4rem;
    --gutter-xl:6rem;
    --gutter-xxl:12rem;

    --underline-weight: -0.0625em;
    --shadow-weight: -0.110rem;
    --border-weight: 0.125rem;

    --borderRadiusNone: 0;
    --borderRadius-xs: 2px;
    --borderRadius-sm: 4px;
    --borderRadius-md: 6px;
    --borderRadius-lg: 8px;
    --borderRadius-xl: 10000px;

    --durationUltraFast: 50ms;
    --durationFaster: 100ms;
    --durationFast: 150ms;
    --durationNormal: 200ms;
    --durationSlow: 300ms;
    --durationSlower: 400ms;
    --durationUltraSlow: 1500ms;

    --curveAccelerateMax: cubic-bezier(1,0,1,1);
    --curveAccelerateMid: cubic-bezier(0.7,0,1,0.5);
    --curveAccelerateMin: cubic-bezier(0.8,0,1,1);
    --curveDecelerateMax: cubic-bezier(0,0,0,1);
    --curveDecelerateMid: cubic-bezier(0.1,0.9,0.2,1);
    --curveDecelerateMin: cubic-bezier(0.33,0,0.1,1);
    --curveEasyEaseMax: cubic-bezier(0.8,0,0.1,1);
    --curveEasyEase: cubic-bezier(0.33,0,0.67,1);
    --curveLinear: cubic-bezier(0,0,1,1);

    --shadow2: 0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14);
    --shadow4: 0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14);
    --shadow8: 0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14);
    --shadow16: 0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14);
    --shadow28: 0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14);
    --shadow64: 0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14);


  }
`;
export const GlobalStyles = createGlobalStyle`
  html{
    font-size:var(--base-size);
    line-height: 1.5;
  }
  html,body{
    margin:0;
    padding:0;
    @media (prefers-color-scheme: dark) {
      background: rgba(10, 10, 50, 1.0);
    }
    @media (prefers-color-scheme: light) {
      background: rgba(245, 245, 245, 1.0);
    }
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: var(--font-md);
  }
  @media screen and (min-width: --screen-lg){
    .app,body{
      /* font-size: var(--font-sm)rem; */
    }
  }
  h1{
    font-size:var(--font-xxl);
    font-weight:400;
  }
  h2{
    font-size:var(--font-lg);
    font-weight:400;
  }
  h3{
    font-size:var(--font-md);
    font-weight:700;
  }
  p,li,pre{
    font-size:var(--font-md);
    font-weight:300;
  }
  a{
    color: ${({ theme }) => theme.colorLinkRest};
    color: ${( {theme} ) => theme.neutralForeground1};
    text-decoration: none;
    outline:none;
    transition: all var(--curveAccelerateMax) var(--durationFast);
    box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.neutralForeground2};
    &:hover, &:focus{
      color: ${({ theme }) => theme.colorLinkRest};
      text-decoration: none;
      outline:none;
      box-shadow: inset 0 var(--underline-weight) 0 0 ${({ theme }) => theme.colorLinkHover};
    }
  }
  pre{
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .button{
    display: inline-block;
    padding:var(--gutter-xs) var(--gutter-sm);
    border-radius: var(--borderRadius-md);
    color: ${({ theme }) => theme.neutralForegroundInverted1};
    background: ${({ theme }) => theme.colorLinkRest};
    &:hover{
      color: ${({ theme }) => theme.neutralForegroundInverted1};
      background: ${({ theme }) => theme.colorLinkHover};
    }
  }
  .u-gutters{
    padding-left: $universal-gutter;
    padding-right: $universal-gutter;
  }
  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
  acronym{
    cursor: help;
    position:relative;
  }
  acronym[title]:hover::after {
      content: attr(title);
      position: absolute;
      top: -100%;
      left: 0;
      font-size:24px; 
      background:red;
    }
  }
`;