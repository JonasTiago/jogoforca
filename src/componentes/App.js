import palavras from "./palavras";
import { useState } from "react";
import img0 from "../assets/img/forca0.png"
import img1 from "../assets/img/forca1.png"
import img2 from "../assets/img/forca2.png"
import img3 from "../assets/img/forca3.png"
import img4 from "../assets/img/forca4.png"
import img5 from "../assets/img/forca5.png"
import img6 from "../assets/img/forca6.png"

let acertos = 0
export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const forca = [img0, img1, img2, img3, img4, img5, img6]

    const [palavraEscolhida, setPalavra] = useState('')
    const [letraEscolhida, setLetraEscolhida] = useState([])
    const [imgErro, setImgErro] = useState(0)
    const [fimDeJogo, setFimDoJogo] = useState()
   /*const [acertosF, setAcertosF] = useState(acertos)*/
    const [novoChute, setNovoChute] = useState('')

    function iniciar() {

        palavras.sort(() => Math.random() - 0.5)
        const palavraSorteada = [...palavras[0]]
        console.log(palavraSorteada)
        setImgErro(0)
        setLetraEscolhida([])
        setFimDoJogo()
        acertos = 0;
        // setAcertos(0)

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

        testandoPalavra.includes(letra) ? acertou(letra,testandoPalavra) : errou()         
    }

    function errou() {
        setImgErro(imgErro + 1)
        const maxErro = 5;

        if (imgErro === maxErro) {
            setFimDoJogo('errou')
            setPalavra('')
        }
    }

    
    


    return (
        <div className="jogo">
            <div className="primeiro-setor">
                <div className="forca" >
                    <img src={forca[imgErro]} alt="forca" />
                </div>
                <div className="inicio">
                    <button onClick={iniciar}>Escolher Palavra</button>
                    <span className="palavraEscolhida">
                        {!fimDeJogo ?
                            palavraEscolhida &&
                            palavraEscolhida.map((l, index) =>
                                letraEscolhida.includes(l) ?
                                    <p key={index} >{l}</p> :
                                    <p key={index} >{'_'}</p>)
                            :
                            fimDeJogo && [...palavras[0]].map((l, index) => <p key={index} className={fimDeJogo} >{l}</p>)
                        }
                    </span>
                </div>
            </div>
            <div className="segundo-setor">
                <div className="alfabeto">
                    {palavraEscolhida.length !== 0 ?
                        (alfabeto.map((le, index) =>
                            letraEscolhida.includes(le) ?
                                <button
                                    key={index}
                                    disabled={true}>
                                    {le}
                                </button> :
                                <button onClick={() => palpite(le)}
                                    key={index}>
                                    {le}
                                </button>)) :
                        alfabeto.map((le, index) =>
                            <button
                                key={index}
                                disabled={true}>
                                {le}
                            </button>)
                    }
                </div>
                <div className="chute">
                    {palavraEscolhida ?
                        <>
                            <p>Já sei a palavra!</p>
                            <label>
                                <input type="text"
                                    onChange={(e) => setNovoChute(e.target.value)}
                                    value={novoChute}
                                />
                            </label>
                            <button onClick={chutou} >chutar</button>
                        </>
                        :
                        <>
                            <p>Já sei a palavra! </p>
                            <input type="text" disabled />
                            <button disabled>chutar</button>
                        </>
                    }
                </div>
            </div>
        </div >
    )
}