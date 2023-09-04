import React from "react"
import styled from 'styled-components'

const MainStyled = styled.main`
  padding-left:var(--gutter-sm);
  padding-right:var(--gutter-sm);
  padding-top:var(--gutter-md);
  padding-bottom:var(--gutter-md);
  @media (min-width: 32rem){
    padding-left:var(--gutter-md);
    padding-right:var(--gutter-md);
  }
  @media (min-width: 64rem){
    padding-left:var(--gutter-xl);
    padding-right:var(--gutter-xl);
  }
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