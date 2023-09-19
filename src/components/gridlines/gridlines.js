import React from "react";
import styled from "styled-components";

const Grid = styled.div`
    z-index: 101;
    content:'Column count = ${props => props.count}';
    position: absolute;
    top: 0;
    right: var(--gutter-sm);
    bottom: 0;
    left: var(--gutter-sm);
    display: grid;
    grid-template-columns: repeat(${props => props.count}, auto);
    gap: var(--gutter-sm);
    pointer-events: none;
`
const Column = styled.div`
    display: flex;
    justify-content: space-between;
    // background-color: rgba(255, 0, 0, 0.05);
    .column:nth-child(1) .line:nth-child(1) {
        transition-delay: 0.00s;
    }
    pointer-events: none;
`
const Line = styled.div`
    width: 1px;
    // height: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.neutralStroke2};
    transition: height var(--durationUltraSlow) var(--curveDecelerateMid);
`

const GridLines = (props) => {
    const data = Array.from({ length: props.count }, (_, index) => index);
    return(
        <Grid className="gridlines" count={props.count}>
            {data.map(i => (
                <Column className="column" key={i}>
                    <Line className="line" />
                    <Line className="line" />
                </Column>
            ))}
        </Grid>
    )
  }

  export default GridLines;