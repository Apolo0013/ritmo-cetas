import './Header.scss'
//imagens
import ImgGitHub from '../../assets/github.svg'
import ImgControl from '../../assets/control.svg'

function Header() {
    return (
        <header className='head-home'>
            <div className='head-logo'>
                <img
                    className='aspect-square h-[80%]'
                    src={ImgControl}
                    alt="Imagem de um controle"
                />
                <h1>Cetas Ritmo</h1>
            </div>
            <div className='w-full h-full flex-center'>
                <img
                    className='aspect-square h-[80%]'
                    src={ImgGitHub}
                    alt="Imagem do GitHub"
                />
            </div>
        </header>
    )
}

export default Header