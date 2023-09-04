import * as React from "react"
import styled from 'styled-components';
import {Link} from "gatsby";

// styles
const NavigationStyled = styled.nav`
  position:relative;
  padding-top:1rem;
  @media (min-width: 32rem){
    padding-top:0.4rem;
    padding-left:2px;
  }
`;
const Frame = styled.div``
const List = styled.ul`
  display: flex;
  justify-content: left;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size:var(--font-xs);
  line-height:var(--font-xs);
  height:var(--font-xs);
`
const Item = styled.li`
  display: inline-flex;
  align-items: left;
  margin: 0 1rem 0 0;
`
const NavLink = styled(Link)`
  display:inline-block;
  color: ${({ theme }) => theme.neutralForeground1};
  text-decoration: none;
  font-size:var(--font-xs);
  font-family: var(--theme-font-secondary);
  font-weight:700;
  text-transform:uppercase;
  height: 1.125rem;
  box-shadow: none;
  &:hover,&:focus{
    outline: none;
    color: ${({ theme }) => theme.neutralForeground1};
    box-shadow: inset 0 var(--shadow-weight) 0 0 ${({ theme }) => theme.colorLinkHover};
    svg{
      color: ${({ theme }) => theme.colorLinkHover};
    }
  }
  svg{
    @extend .icon;
  }
`;
const Navigation = (props) => {
  return (
    <NavigationStyled role="navigation" {...props}>
      <Frame>
        <List>
          <Item>
            <NavLink to="/resume/">Resume</NavLink>
          </Item>
          <Item>
            <NavLink to="/projects/">Projects</NavLink>
          </Item>
          <Item>
            <NavLink to="/resources/">Resources</NavLink>
          </Item>
          <Item>
            <NavLink to="/colophon/">Colophon</NavLink>
          </Item>
        </List>
      </Frame>
    </NavigationStyled>
  )
}

export default Navigation