import * as React from "react"
import styled from "styled-components";

  const GridStyled = styled.ul`
    margin:0;
    padding:0;
    display: grid;
    width: 100%;
    flex-flow: row wrap;
    margin-bottom: var(--gutter-sm);
    grid-template-columns: ${(props) => `repeat(auto-fill, minmax(${props.minColWidth || '25%'}, 1fr)) `};
    grid-auto-rows: 1fr;
    grid-gap: var(--gutter-sm);
    li{
      display: block;
      box-sizing: border-box;
      flex-direction: column;
      width: 100%;
      flex: 1 0 288px;
      justify-content: center;
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