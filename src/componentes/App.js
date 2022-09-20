import palavras from "./palavras";

function Forca(props) {

    return (
        <div class="forca">
            <img src={props.imagem} />
        </div>
    )
}

function BtInicio() {
    return (
        <>
            <button>Escolher Palavra</button>
        </>
    )
}

function Palavra(props) {
    return (
        <>
            <span class="palavraEscolhida">_ _ _ _ _ _ _ _ </span>
        </>
    )
}

function Letras(props) {
    console.log(props)
    const {letras, estado} = props
    

    return (
        <div class="alfabeto">
            {letras.map(letra => <button class={estado}>{letra}</button>)}
        </div>
    )

}

function Chute() {
    return (
        <div class="chute">
            <p>Já sei a palavra!</p>
            <input type="text" />
            <button>chutar</button>
        </div>
    )
}

export default function App() {
    const todasPalavras = palavras;
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <main class="jogo">
            <section class='section1'>
                <Forca imagem="assets/img/forca0.png" />
                <div class="inicio">
                    <BtInicio />
                    <Palavra palavras={todasPalavras} />
                </div>
            </section>

            <section class="section2">
                <Letras letras={alfabeto} estado={'desativado'} />
                <Chute />
            </section>
        </main>
    )
}