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
        title="Layout"
        description=""
        image=""
        pathname=""
        article=""
      />
      <LayoutStyled location={props.location}>
        <Skip href="#main"/>
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