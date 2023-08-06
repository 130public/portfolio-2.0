import React from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  th,td{
    padding-top:var(--gutter-xs);
    padding-right:var(--gutter-xl);
    padding-bottom:var(--gutter-xs);
    padding-left:var(--gutter-xs);
  }
  thead{
    height: 3rem;
    tr{}
    th{
      text-align: left;
    }
  }
  tbody{
    tr{}
    td{
      width:15%;
      border-top: solid 1px ${( {theme} ) => theme.neutralStroke2};
    }
  }
`

const Table = (props) => {
  return(
    <TableStyled>
      {props.children}
    </TableStyled>
  )
}
export default Table;