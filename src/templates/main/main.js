import React from "react"
import styled from 'styled-components'

const MainStyled = styled.main`
  padding-left:var(--gutter-md);
  padding-right:var(--gutter-md);
  padding-top:var(--gutter-md);
  padding-bottom:var(--gutter-md);
`

const Main = (props) => {
  const {children} = props;

  return (

    <MainStyled {...props}>
      {children}
    </MainStyled>

  )

}

export default Main