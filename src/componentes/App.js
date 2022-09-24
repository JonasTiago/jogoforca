import palavras from "./palavras";
import { useState } from "react";
import img0 from "../assets/img/forca0.png"
import img1 from "../assets/img/forca1.png"
import img2 from "../assets/img/forca2.png"
import img3 from "../assets/img/forca3.png"
import img4 from "../assets/img/forca4.png"
import img5 from "../assets/img/forca5.png"
import img6 from "../assets/img/forca6.png"


export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const forca = [img0, img1, img2, img3, img4, img5, img6]

    const [palavraEscolhida, setPalavra] = useState()
    const [letraEscolhida, setLetraEscolhida] = useState([])
    const [imgErro, setImgErro] = useState(0)
    const [fimDeJogo, setFimDoJogo] = useState()
    const [acertos, setAcertos] = useState(0)
    const [novoChute, setNovoChute] = useState('')

    function iniciar() {

        palavras.sort(() => Math.random() - 0.5)
        const palavraSorteada = [...palavras[0]]

        setImgErro(0)
        setLetraEscolhida([])
        setFimDoJogo()
        setAcertos(0)

        setPalavra(
            palavraSorteada
        )
    }

    function palpite(letra) {

        switch (letra) {
            case 'a':
                setLetraEscolhida([...letraEscolhida, 'á', 'ã', 'a'])
                break;
            case 'e':
                setLetraEscolhida([...letraEscolhida, 'é', 'ê', 'e'])
                break
            case 'i':
                setLetraEscolhida([...letraEscolhida, 'í', 'i'])
                break
            case 'o':
                setLetraEscolhida([...letraEscolhida, 'ó', 'ô', 'o'])
                break
            case 'u':
                setLetraEscolhida([...letraEscolhida, 'ú', 'u'])
                break
            case 'c':
                setLetraEscolhida([...letraEscolhida, 'ç', 'c'])
                break
            default:
                setLetraEscolhida([...letraEscolhida, letra])
                break;
        }

        const testandoPalavra = palavraEscolhida.toString('').replace(/[áã]/gi, 'a').replace(/[éê]/gi, 'e').replace(/[í]/gi, 'i').replace(/[óô]/gi, 'o').replace(/[ú]/gi, 'u').replace(/[ç]/gi, 'c').split(',')

        testandoPalavra.includes(letra) ? acertou(letra, testandoPalavra) : errou()
    }

    function errou() {
        const novoErro = imgErro + 1
        setImgErro(novoErro)
        const maxErro = 6;

        if (novoErro === maxErro) {
            setFimDoJogo('errou')
            setPalavra('')
        }
    }

    function acertou(l, testandoPalavra) {
        const numAcertos = testandoPalavra.filter(le => le === l).length
        const maximoDeAcertos = palavraEscolhida.length
        const acertosTotal = acertos + numAcertos

        setAcertos(acertosTotal)

        if (acertosTotal === maximoDeAcertos) {
            setFimDoJogo('acertou')
            setPalavra('')
        }
    }

    function chutou() {
        setNovoChute('')

        if (novoChute.toString(',') === palavras[0].toString(',')) {
            setFimDoJogo('acertou')
            setPalavra('')

        } else {
            setFimDoJogo('errou')
            setPalavra('')
            setLetraEscolhida([])
            setImgErro(6)
        }
    }

    return (
        <div className="jogo">
            <div className="primeiro-setor">
                <div className="forca" >
                    <img src={forca[imgErro]} alt="forca" data-identifier="game-image" />
                </div>
                <div className="inicio">
                    <button onClick={iniciar} data-identifier="choose-word">Escolher Palavra</button>
                    <span className="palavraEscolhida" data-identifier="word">
                        {!fimDeJogo ?
                            (palavraEscolhida &&
                                palavraEscolhida.map((l, index) =>
                                    <p key={index} >{letraEscolhida.includes(l) ? l : '_'}</p>))
                            :
                            (fimDeJogo && [...palavras[0]].map((l, index) => <p key={index} className={fimDeJogo} >{l}</p>))
                        }
                    </span>
                </div>
            </div>
            <div className="segundo-setor">
                <div className="alfabeto">
                    {
                        alfabeto.map((le, index) =>
                            <button
                                onClick={() => palpite(le)}
                                key={index}
                                disabled={!palavraEscolhida ?
                                    true :
                                    (letraEscolhida.includes(le) && true)}
                                data-identifier="letter"
                            >
                                {le}
                            </button>)
                    }
                </div>
                <div className="chute">
                    {
                        <>
                            <p>Já sei a palavra!</p>
                            <label>
                                <input type="text"
                                    onChange={(e) => setNovoChute(e.target.value.toLowerCase())}
                                    value={novoChute}
                                    disabled={!palavraEscolhida}
                                    data-identifier="type-guess"
                                />
                            </label>
                            <button onClick={chutou} disabled={!palavraEscolhida} data-identifier="guess-button">
                                chutar
                            </button>
                        </>
                    }
                </div>
            </div>
        </div >
    )
}