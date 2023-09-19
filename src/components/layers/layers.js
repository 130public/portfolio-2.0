import * as React from "react"
import styled from "styled-components";

const Container = styled.div`
    display:block;
    margin:20px;
    position:relative;
    transition: all .5s ease-in-out;
    min-height:60vh;
    color:white;
    a{
        color:white;
    }
`;

const Background = styled.div`
    mix-blend-mode: normal;
    opacity: 0.6;
    background-color: #eba315;
    position: absolute;
    top: 10px;
    right: -10px;
    bottom: -10px;
    left: 10px;
`;

const Graphic = styled.div`
    mix-blend-mode: multiply;
    opacity: 1.0;
    background-image: url(${ props => props.image });
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
`;

const Scrim = styled.div`
    mix-blend-mode: multiply;
    opacity: 0.2;
    background-color: #73b54c;
    position: absolute;
    top: -10px;
    right: 10px;
    bottom: 10px;
    left: -10px;
`;

const Contents = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding:48px;
`;

const Layers = (props) => {

    return(
        <Container>
            <Background></Background>
            <Graphic image={props.image}></Graphic>
            <Scrim></Scrim>
            <Contents>
                {props.children}
            </Contents>
        </Container>

    );

}

export default Layers;