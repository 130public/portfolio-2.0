import * as React from "react"
import styled from "styled-components";

  const GridStyled = styled.ul`
    margin:0;
    padding:0;
    display: grid;
    max-width: 100%;
    margin-bottom: var(--gutter-sm);
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--gutter-sm);
    li{
      display: block;
      list-style:none;
    }
  `;

const Grid = (props) => {
  const {children} = props;
  return (
    <GridStyled>
      {children}
    </GridStyled>
  )
}

export default Grid;