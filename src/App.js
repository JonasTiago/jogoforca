import palavras from './assets/contents/palavras.js';
import { useState, React } from 'react';
import styled from 'styled-components';
import Forca from './components/Forca.js';
import Palavra from './components/Palavra.js';
import Alfabeto from './components/Alfabeto.js';
import Chute from './components/Chute.js';

export default function App() {
  const [inicioDoJogo, setInicioDoJogo] = useState(false);
  const [fimDeJogo, setFimDoJogo] = useState(false);

  const [palavra, setPalavra] = useState();

  const [letraEscolhida, setLetraEscolhida] = useState([]);

  const [imgErro, setImgErro] = useState(0);
  const [acertos, setAcertos] = useState(0);

  const [novoChute, setNovoChute] = useState('');

  function iniciar() {
    // setLetraEscolhida([]);
    setInicioDoJogo(!inicioDoJogo);
    // setFimDoJogo();
    // setAcertos(0);
  }

  //   function palpite(letra) {
  //     switch (letra) {
  //       case 'a':
  //         setLetraEscolhida([...letraEscolhida, 'á', 'ã', 'a']);
  //         break;
  //       case 'e':
  //         setLetraEscolhida([...letraEscolhida, 'é', 'ê', 'e']);
  //         break;
  //       case 'i':
  //         setLetraEscolhida([...letraEscolhida, 'í', 'i']);
  //         break;
  //       case 'o':
  //         setLetraEscolhida([...letraEscolhida, 'ó', 'ô', 'o']);
  //         break;
  //       case 'u':
  //         setLetraEscolhida([...letraEscolhida, 'ú', 'u']);
  //         break;
  //       case 'c':
  //         setLetraEscolhida([...letraEscolhida, 'ç', 'c']);
  //         break;
  //       default:
  //         setLetraEscolhida([...letraEscolhida, letra]);
  //         break;
  //     }

  //     const testandoPalavra = palavra
  //       .toString('')
  //       .replace(/[áã]/gi, 'a')
  //       .replace(/[éê]/gi, 'e')
  //       .replace(/[í]/gi, 'i')
  //       .replace(/[óô]/gi, 'o')
  //       .replace(/[ú]/gi, 'u')
  //       .replace(/[ç]/gi, 'c')
  //       .split(',');

  //     testandoPalavra.includes(letra) ? acertou(letra, testandoPalavra) : errou();
  //   }

  function errou() {
    const novoErro = imgErro + 1;
    setImgErro(novoErro);
    const maxErro = 6;

    if (novoErro === maxErro) {
      setFimDoJogo(!fimDeJogo);
      // setPalavra('');
    }
  }

  function acertou(l, testandoPalavra) {
    const numAcertos = testandoPalavra.filter((le) => le === l).length;
    const maximoDeAcertos = palavra.length;
    const acertosTotal = acertos + numAcertos;

    setAcertos(acertosTotal);

    if (acertosTotal === maximoDeAcertos) {
      setFimDoJogo('acertou');
      // setPalavra('');
    }
  }

  // function chutou() {
  //   setNovoChute('');

  //   if (novoChute.toString(',') === palavras[0].toString(',')) {
  //     setFimDoJogo('acertou');
  //     setPalavra('');
  //   } else {
  //     setFimDoJogo('errou');
  //     setPalavra('');
  //     setLetraEscolhida([]);
  //     setImgErro(6);
  //   }
  // }

  return (
    <JogoStyle>
      <PrimeiroSetorStyle>
        <Forca imgErro={imgErro} />
        <InicioStyle>
          <button onClick={iniciar} disabled={inicioDoJogo}>
            Escolher Palavra
          </button>
          {inicioDoJogo ? (
            <Palavra
              fimDeJogo={fimDeJogo}
              inicioDoJogo={inicioDoJogo}
              letraEscolhida={letraEscolhida}
              palavra={palavra}
              setPalavra={setPalavra}
              acertos={acertos}
            />
          ) : (
            ''
          )}
        </InicioStyle>
      </PrimeiroSetorStyle>

      <SegundoSetorStyle>
        <Alfabeto
          inicioDoJogo={inicioDoJogo}
          fimDeJogo={fimDeJogo}
          letraEscolhida={letraEscolhida}
          setLetraEscolhida={setLetraEscolhida}
          palavra={palavra}
          errou={errou}
          acertou={acertou}
        />

        <Chute palavra={palavra} setPalavra={setPalavra} />
      </SegundoSetorStyle>
    </JogoStyle>
  );
}

const JogoStyle = styled.div`
  width: 50vw;
  height: 90vh;
  margin: auto;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PrimeiroSetorStyle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70%;
  position: relative;
`;

const InicioStyle = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 200px;
    height: 50px;
    background-color: #27ae60;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: gray;
  }
`;

const SegundoSetorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
`;
