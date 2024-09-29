import React from 'react';
import { forcaImgs } from '../assets/contents/forcaImgs.js';
import styled from 'styled-components';

export default function Forca(imgErro) {
  const forca = forcaImgs;

  return (
    <ForcaStyle>
      <ImgStyle src={forca[imgErro.imgErro]} alt="Forca" />
    </ForcaStyle>
  );
}

const ForcaStyle = styled.div`
  width: 40%;
  display: flex;
`;

const ImgStyle = styled.img`
  width: 95%;
  height: 100%;
`;
