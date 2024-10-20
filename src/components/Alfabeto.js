import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palavras from '../assets/contents/palavras';
import { alfabetoFull } from '../assets/contents/Alfabelto';
/* eslint-disable */
export default function Alfabeto({
  inicioDoJogo,
  fimDeJogo,
  letraEscolhida,
  setLetraEscolhida,
  palavra,
  errou,
  acertou,
}) {
  const alfabeto = alfabetoFull;

  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     const letra = event.key.toLowerCase();
  //     if (alfabeto.includes(letra) && !letraEscolhida.includes(letra)) {
  //     palpite(letra);
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [letraEscolhida]);

  function palpite(letra) {
    switch (letra) {
      case 'a':
        setLetraEscolhida([...letraEscolhida, 'á', 'ã', 'a']);
        break;
      case 'e':
        setLetraEscolhida([...letraEscolhida, 'é', 'ê', 'e']);
        break;
      case 'i':
        setLetraEscolhida([...letraEscolhida, 'í', 'i']);
        break;
      case 'o':
        setLetraEscolhida([...letraEscolhida, 'ó', 'ô', 'o']);
        break;
      case 'u':
        setLetraEscolhida([...letraEscolhida, 'ú', 'u']);
        break;
      case 'c':
        setLetraEscolhida([...letraEscolhida, 'ç', 'c']);
        break;
      default:
        setLetraEscolhida([...letraEscolhida, letra]);
        break;
    }

    const testandoPalavra = palavra
      ?.toString('')
      .replace(/[áã]/gi, 'a')
      .replace(/[éê]/gi, 'e')
      .replace(/[í]/gi, 'i')
      .replace(/[óô]/gi, 'o')
      .replace(/[ú]/gi, 'u')
      .replace(/[ç]/gi, 'c')
      .split(',');

    testandoPalavra?.includes(letra) ? acertou(letra, testandoPalavra) : errou();
  }

  return (
    <AlfabetoStyle>
      {inicioDoJogo 
        ? alfabeto.map((le, index) => (
            <button
              onClick={() => palpite(le)}
              key={index}
              disabled={letraEscolhida.includes(le) && true}
            >
              {le}
            </button>
          ))
        : alfabeto.map((le, index) => (
            <button
              onClick={() => palpite(le)}
              key={index}
              disabled={true}
            >
              {le}
            </button>
          ))}
    </AlfabetoStyle>
  );
}

const AlfabetoStyle = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  /* margin: 20px 65px 15px 85px; */

  button {
    margin: 2px;
    width: 48px;
    height: 48px;
    background-color: #e1ecf4;
    color: #39739d;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px #39739d solid;
    border-radius: 5px;
  }

  button:hover {
    background-color: #0080dc9f;
  }

  button:disabled {
    color: #79818f;
    background-color: #9faab5;
    cursor: inherit;
  }
`;
/* eslint-disable */
