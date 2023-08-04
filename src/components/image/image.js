import * as React from "react"
import styled from 'styled-components';

// styles
const ImageStyled = styled.img`
  -webkit-filter: none;
  filter: none;
  mix-blend-mode: normal;
`;
const ImageGrayStyled = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  mix-blend-mode: screen;
  transition: all 500ms;
`
const Image = (props) => {
  const Variant = (props.variant === 'grayscale') ? <ImageGrayStyled {...props} /> : <ImageStyled {...props}/>;

  return Variant;
}

export default Image