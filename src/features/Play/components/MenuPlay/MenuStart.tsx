//css
import './MenuPlay.scss'
//imagens
import ImgPlay from '../../../../shared/assets/play.svg'
//context e store
import { useAudio } from '../../store/audioContext/useAudio'
import { menuPlayState } from '../../store/menuPlay.store'


function MenuStart() {
    //context
    const context = useAudio()!
    //responsavel por mudar o valor de um estado, que controla 2 UI
    const setIsBegin = menuPlayState(state => state.setIsBegin)
    const setIsShow = menuPlayState(state => state.setIsShow)
    return (
        <div className='menu-start'>
            <h1 className='titulo-game'>Setas Ritmo</h1>
            <p>Para começar, clique no botão abaixo e inicie a música.</p>
            <button
                className="menu-play-btn menu-play-btn-primary"
                onClick={() => {
                    if (!context) return
                    setIsBegin(true)
                    setIsShow(false)
                    context.playAudio()
                }}
            >
                <img
                    src={ImgPlay}
                    alt="Imagem de uma play"
                />
                <p>Começar</p>
            </button>
        </div>
    )
}

export default MenuStart