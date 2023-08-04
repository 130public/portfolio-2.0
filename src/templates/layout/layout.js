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

const Layout = (props) => {

  const [selectedTheme, setSelectedTheme] = useState(lightTheme);
  // const HandleThemeChange = (theme) => {
  //   setSelectedTheme(theme);
  //   localStorage.setItem("current-theme", JSON.stringify(theme));
  // };
  // useEffect(() => {
  //   const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
  //   if (currentTheme) {
  //     setSelectedTheme(currentTheme);
  //   }
  // }, []);

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
          {/* <button onClick={() => HandleThemeChange(lightTheme)}>lightTheme</button>
          <button onClick={() => HandleThemeChange(darkTheme)}>darkTheme</button> */}
          {props.children}
        </Content>
        <Footer />
      </LayoutStyled>
    </ThemeProvider>
  )
}

export default Layout