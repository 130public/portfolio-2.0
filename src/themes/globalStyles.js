import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @font-face{
  font-family:GT Pressura;
  font-weight:300;
  src:url(/assets/fonts/gt-pressura/light/gt-pressura-light.eot?) format("eot"),url(/assets/fonts/gt-pressura/light/gt-pressura-light.woff) format("woff"),url(/assets/fonts/gt-pressura/light/gt-pressura-light.ttf) format("truetype")}
  @font-face{
    font-family:GT Pressura;
    font-weight:400;
    src:url(/assets/fonts/gt-pressura/regular/gt-pressura-regular.eot?) format("eot"),url(/assets/fonts/gt-pressura/regular/gt-pressura-regular.woff) format("woff"),url(/assets/fonts/gt-pressura/regular/gt-pressura-regular.ttf) format("truetype")}
  @font-face{
    font-family:GT Pressura;
    font-weight:700;
    src:url(/assets/fonts/gt-pressura/bold/gt-pressura-bold.eot?) format("eot"),url(/assets/fonts/gt-pressura/bold/gt-pressura-bold.woff) format("woff"),url(/assets/fonts/gt-pressura/bold/gt-pressura-bold.ttf) format("truetype")}
  @font-face{
  font-family:GT Pressura Mono;
  font-weight:300;
  src:url(/assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.eot?) format("eot"),url(/assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.woff) format("woff"),url(/assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.ttf) format("truetype")}
  @font-face{
  font-family:GT Pressura Mono;
  font-weight:400;
  src:url(/assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.eot?) format("eot"),url(/assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.woff) format("woff"),url(/assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.ttf) format("truetype")}
  @font-face{
  font-family:GT Pressura Mono;
  font-weight:700;
  src:url(/assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.eot?) format("eot"),url(/assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.woff) format("woff"),url(/assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.ttf) format("truetype")}
  @font-face{
  font-family:socicon;
  src:url(/assets/fonts/socicon/socicon-webfont.eot);
  src:url(/assets/fonts/socicon/socicon-webfont.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/socicon/socicon-webfont.woff) format("woff"),url(/assets/fonts/socicon/socicon-webfont.ttf) format("truetype"),url(/assets/fonts/socicon/socicon-webfont.svg#scrawlregular) format("svg");
  font-weight:400;
  font-style:normal}
`;
export const GlobalVars = createGlobalStyle`
  :root {
    --theme-font-primary:"GT Pressura", -apple-system, Arial, sans-serif;
    --theme-font-secondary:"GT Pressura Mono", 'Courier New', Courier, monospace;
    
    --screen-max: 75rem;
    --screen-lg: 64rem;
    --screen-md: 25rem;
    --screen-lg: 32rem;

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

    --underline-weight: -0.0625em;
    --shadow-weight: -0.110rem;
    --border-weight: 0.125rem;

    --borderRadiusNone: 0;
    --borderRadiusSmall: 2px;
    --borderRadiusMedium: 4px;
    --borderRadiusLarge: 6px;
    --borderRadiusXLarge: 8px;
    --borderRadiusCircular: 10000px;

    --durationUltraFast: 50ms;
    --durationFaster: 100ms;
    --durationFast: 150ms;
    --durationNormal: 200ms;
    --durationSlow: 300ms;
    --durationSlower: 400ms;
    --durationUltraSlow: 500ms;

    --curveAccelerateMax: cubic-bezier(1,0,1,1);
    --curveAccelerateMid: cubic-bezier(0.7,0,1,0.5);
    --curveAccelerateMin: cubic-bezier(0.8,0,1,1);
    --curveDecelerateMax: cubic-bezier(0,0,0,1);
    --curveDecelerateMid: cubic-bezier(0.1,0.9,0.2,1);
    --curveDecelerateMin: cubic-bezier(0.33,0,0.1,1);
    --curveEasyEaseMax: cubic-bezier(0.8,0,0.1,1);
    --curveEasyEase: cubic-bezier(0.33,0,0.67,1);
    --curveLinear: cubic-bezier(0,0,1,1);

    --shadow2: 0 0 2px rgba(0;0;0;0.12); 0 1px 2px rgba(0;0;0;0.14);
    --shadow4: 0 0 2px rgba(0;0;0;0.12); 0 2px 4px rgba(0;0;0;0.14);
    --shadow8: 0 0 2px rgba(0;0;0;0.12); 0 4px 8px rgba(0;0;0;0.14);
    --shadow16: 0 0 2px rgba(0;0;0;0.12); 0 8px 16px rgba(0;0;0;0.14);
    --shadow28: 0 0 8px rgba(0;0;0;0.12); 0 14px 28px rgba(0;0;0;0.14);
    --shadow64: 0 0 8px rgba(0;0;0;0.12); 0 32px 64px rgba(0;0;0;0.14);


  }
`;
export const GlobalStyles = createGlobalStyle`
  html,body{margin:0;padding:0;font-size:var(--base-size);line-height: 1.5;}
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.themeBackgroundColor};
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
  p{
    font-size:var(--font-sm);
    font-weight:300;
  }
  a{
    color: ${({ theme }) => theme.colorLinkRest};
    text-decoration: none;
    outline:none;
    transition: all var(--curveAccelerateMax) var(--durationNormal);
    &:hover, &:focus{
      color: ${({ theme }) => theme.colorLinkHover};
      text-decoration: none;
      outline:none;
    }
  }
  pre{
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .button{
    display: inline-block;
    padding:4px;
    color: ${({ theme }) => theme.colorTextInverted1};
    background: ${({ theme }) => theme.colorLinkRest};
    &:hover{
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
`;