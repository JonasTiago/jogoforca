import palavras from "./palavras";
import { useState } from "react";

function Chute() {

    return (
        <div class="chute">
            <p>Já sei a palavra!</p>
            <input type="text" />
            <button >chutar</button>
        </div>
    )
}

function Letras(props) {

    const letras = props.letra

    return (

        <div class="alfabeto">
            {letras.map(letra => <button >{letra}</button>)}
        </div>

    )
}

function Jogo(props) {

    const { todasPalavras, letras, imagem } = props
    const [erro, setErro] = useState(0)
    const [inicio, setInicio] = useState('disabled')


    function errou() {
        return setErro(erro + 1)
    }

    const [palavra, setPalavra] = useState('');

    function iniciar() {
        console.log(palavra)
        todasPalavras.sort(()=>  Math.random() - 0.5)
        console.log(todasPalavras[0])
        setPalavra(
            todasPalavras[0]
        )
        
    }

    return (
        <div class="jogo">
            <div class="section1">
                <img class="forca" src={imagem[erro]} />
                <div class="inicio">
                    <button onClick={iniciar}>Escolher Palavra</button>
                    <span class="palavraEscolhida">{palavra.split('').map((letra) => <p>_ </p>)}</span>
                </div>
            </div>
            <div class="section2">
                <Letras letra={letras} />
                <Chute />
            </div>
        </div>
    )

}

export default function App() {
    const imgForca = ['assets/img/forca0.png', 'assets/img/forca1.png', 'assets/img/forca2.png', 'assets/img/forca3.png', 'assets/img/forca4.png', 'assets/img/forca5.png', 'assets/img/forca6.png']

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <Jogo todasPalavras={palavras} letras={alfabeto} imagem={imgForca} />
    )
}