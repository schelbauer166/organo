import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='logos'>
            <img src='/imagens/fb.png' alt='logo facebook'></img>
            <img src='/imagens/tw.png' alt='logo twitter'></img>
            <img src='/imagens/ig.png' alt='logo instagram'></img>
            </div>
            <div className='meio'>
                <img src='/imagens/logo.png' alt='logo organo'></img>
            </div>
            <div className='desenvolvido'>
                <p>Desenvolvido por Felipe</p>
            </div>
        </footer>
    )
}
export default Rodape