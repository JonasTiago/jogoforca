/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import palavras from '../assets/contents/palavras';

export default function Palavra({
  fimDeJogo,
  letraEscolhida,
  palavra,
  setPalavra,
  inicioDoJogo,
  acertos,
}) {
  useEffect(() => {
    palavras?.sort(() => Math.random() - 0.5);
    const palavraSorteada = [...palavras[0]];
    setPalavra(palavraSorteada);
  }, []);

  const acertou = acertos === palavra?.length;

  return (
    <PalavraStyle acertou={acertou}>
      {inicioDoJogo ?
        palavra?.map((l, index) => (
          <p key={index}>{letraEscolhida.includes(l) ? l : '_'}</p>
        )): palavra?.map((l, index) => <b key={index}>{l}</b>)}
    </PalavraStyle>
  );
}

const PalavraStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;

  p {
    font-size: 35px;
    font-weight: bold;
  }

  b {
    font-size: 35px;
    font-weight: bold;
    color: ${(props) => (props.acertou ? 'green' : 'red')};
  }
`;

/* eslint-disable */
