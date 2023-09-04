import React, {useState, useEffect} from "react"
import styled, {ThemeProvider} from 'styled-components';
import {GlobalFonts,GlobalVars,GlobalStyles} from '../../themes/globalStyles'
import lightTheme from '../../themes/lightTheme'
import darkTheme from '../../themes/darkTheme'
import Seo from '../../components/seo'
import Skip from '../../components/skip'
import Header from '../../components/header'
import Footer from '../../components/footer'

// styles
const LayoutStyled = styled.div`
  color:var(--text-primary);
  font-family:"GT Pressura", -apple-system, Arial, sans-serif;
`
const Content = styled.div``
const ThemeButton = styled.button`
  text-indent: -9999px;
  margin-left: var(--gutter-xs);
  padding: 0;
  height: var(--font-lg);
  padding:0 0.25rem;
  width: var(--font-lg);
  border:var(--border-weight) solid ${({ theme }) => theme.neutralForeground1};
  cursor: pointer;
`;
const LightThemeButton = styled(ThemeButton)`
  background: var(--theme-light-swatch);
`;
const DarkThemeButton = styled(ThemeButton)`
  background: var(--theme-dark-swatch);
`;

const Draft = styled.div`
  text-align: center;
  color: black;
  background: rgb(145 145 145 / 85%);
  font-size: 15px;
  padding: 4px 100px 8px;
  line-height: 20px;
  transform: rotate(45deg);
  display: inline-block;
  position: fixed;
  top: 65px;
  right: -130px;
  z-index:9999;
`


const Layout = (props) => {
  var preferredTheme = lightTheme;
  //Switch theme based on OS settings
  useEffect(() => {
    preferredTheme = (window.matchMedia('(prefers-color-scheme: light)').matches === true) ? lightTheme : darkTheme;
  }, []);

  //Switch theme based on user's manual preference, overrides OS settings
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  const [selectedTheme, setSelectedTheme] = useState(preferredTheme);
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalFonts />
      <GlobalVars />
      <GlobalStyles />
      <Seo
        title="130PULBIC | The portfolio of Jason Geiger"
        description=""
        image=""
        pathname=""
        article=""
      />
      <LayoutStyled location={props.location}>
        <Skip href="#main"/>
        <Draft>Draft of Portfolio 2.0<br/>Live portfolio @ <a href="https://130public.net">https://130public.net</a></Draft>
        <Header/>
        <Content id="main">
          {props.children}
        </Content>
        <Footer>
          <DarkThemeButton onClick={() => HandleThemeChange(darkTheme)}>darkTheme</DarkThemeButton>
          <LightThemeButton onClick={() => HandleThemeChange(lightTheme)}>lightTheme</LightThemeButton>
        </Footer>
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout