import './Header.scss'
//imagens
import ImgGitHub from '../../assets/github.svg'
//Componentes/UI
import HeaderLogo from '../../../../shared/UI/HeaderLogo/HeaderLogo'

function Header() {
    return (
        <header className='head-home'>
            <HeaderLogo />
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