import React, { useState } from 'react';
import { forcaImgs } from '../assets/contents/forcaImgs.js';
import styled from 'styled-components';
/* eslint-disable */

export default function Chute({ palavra }) {
  const [novoChute, setNovoChute] = useState('');

  function chutou() {
    setNovoChute('');

    // if (novoChute.toString(',') === palavra.toString(',')) {
    //   setFimDoJogo('acertou');
    //   setPalavra('');
    // } else {
    //   setFimDoJogo('errou');
    //   setPalavra('');
    //   setLetraEscolhida([]);
    //   setImgErro(6);
    // }
  }

  return (
    <ChuteStyle>
      <p>Já sei a palavra!</p>
      <label>
        <input
          type="text"
          onChange={(e) => setNovoChute(e.target.value.toLowerCase())}
          value={novoChute}
          disabled={!palavra}
          data-identifier="type-guess"
        />
      </label>
      <button
        onClick={chutou}
        disabled={!palavra}
        data-identifier="guess-button"
      >
        chutar
      </button>
    </ChuteStyle>
  );
}

/* eslint-disable */
const ChuteStyle = styled.div`
  margin: 10px auto;
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
    margin-right: 10px;
  }

  input {
    width: 280px;
    height: 30px;
    margin-right: 10px;
    font-size: 20px;
  }

  > button {
    background-color: #e1ecf4;
    color: #39739d;
    font-weight: bold;
    border: 1px #39739d solid;
    width: 75px;
    height: 40px;
    font-size: 0.99em;
    text-transform: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #badef8bc;
  }

  button:disabled {
    color: #79818f;
    background-color: #9faab5;
    cursor: inherit;
  }
`;
