// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import palavras from '../assets/contents/palavras';
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
      {inicioDoJogo && !fimDeJogo
        ? palavra?.map((l, index) => (
            <p key={index}>{letraEscolhida.includes(l) ? l : '_'}</p>
          ))
        : palavra?.map((l, index) => (
            <b key={index}>{l}</b>
          ))}
          {palavra}
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

// export default function Palavra({
//   fimDeJogo,
//   letraEscolhida,
//   palavra,
//   setPalavra,
//   inicioDoJogo,
//   acertos
// }) {
//   useEffect(() => {
//     palavras?.sort(() => Math.random() - 0.5);
//     const palavraSorteada = [...palavras[0]];
//     setPalavra(palavraSorteada);
//   }, []);

  // const resultado = () => {
  //   if (palavra?.every((l) => letraEscolhida.includes(l))) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

//   return (
//     <PalavraStyle >
//       {palavra}
//       {inicioDoJogo && !fimDeJogo
//         ? palavra?.map((l, index) => (
//             <p key={index}>{letraEscolhida.includes(l) ? l : '_'}</p>
//           ))
//         : palavra?.map((l, index) => (
          
//             <b key={index} resultado={acertos === palavra?.length}>
//               {l}
//             </b>
//           ))}
//     {console.log(acertos === palavra?.length ? 'acertou': 'errou')}
//     </PalavraStyle>
//   );
// }

// const PalavraStyle = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 3%;

//   p {
//     font-size: 35px;
//     font-weight: bold;  

//   }

//   b {
//     font-size: 35px;
//     font-weight: bold;
//     color: ${(props) => (props.resultado == 'acertou' ? 'green' : 'red')};
//   }
  /* .errou {
    color: red;
  }
  .acertou {
    color: green;
  } */
// `;
/* eslint-disable */
