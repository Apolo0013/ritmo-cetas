//Componentes
import HeaderLogo from '../../../../shared/UI/HeaderLogo/HeaderLogo'
//css
import './Header.scss'
//store
import { gameState } from '../../store/game.store'
//imagens
import PauseImg from '../../assets/pause-default.svg'
//store
import { menuPlayState } from '../../store/menuPlay.store'


function Header() {
    const valueCurrentScore: number = gameState(state => state.scoreView)
    //store
    const setIsShow = menuPlayState(state => state.setIsShow)
    return (    
        <header className='wraper-play-header'>
            <div className='play-header'>
                <HeaderLogo />
                <div className='play-header-info'>
                    <h2>Score: <strong>{valueCurrentScore}</strong></h2>
                    <h2>Combo: <strong>0</strong></h2>
                </div>
            </div>
            <button
                className='btn-pause'
                onClick={() => setIsShow(true)}
            >
                <img
                    src={PauseImg}
                    alt='Imagem de pause'
                />
            </button>
        </header>
    )
}

export default Header