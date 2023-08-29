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
const Content = styled.div`

`

const ThemeButton = styled.button`
  text-indent: -9999px;
  margin-left: var(--gutter-xs);
  padding: 0;
  height: var(--font-sm);
  width: var(--font-sm);
  border-radius: var(--font-sm);
  border: 1px solid ${({ theme }) => theme.neutralForeground1};;
  box-shadow: -1px 3px 6px rgba(0,0,0,0.3) inset;
  cursor: pointer;
`;

const Layout = (props) => {

  const [selectedTheme, setSelectedTheme] = useState(darkTheme);
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
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
          <ThemeButton onClick={() => HandleThemeChange(lightTheme)}>lightTheme</ThemeButton>
          <ThemeButton onClick={() => HandleThemeChange(darkTheme)}>darkTheme</ThemeButton>
        </Footer>
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout