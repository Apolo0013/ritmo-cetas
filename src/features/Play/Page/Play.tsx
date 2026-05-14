import Header from '../components/Header/Header'
import HitZone from '../components/HitZone/HitZone'
import MenuPlay from '../components/MenuPlay/index'
import ShowKeys from '../components/ShowKeys/ShowKeys'
//contexto
import AudioProvider from '../store/audioContext/audio.Provider'
//store
import { menuPlayState } from '../store/menuPlay.store'
//
import './Play.scss'

function Play() {
    const isShow: boolean = menuPlayState(state => state.isShow)
    return (
        <main className='play'>
            <AudioProvider>
                { 
                    isShow
                        ? <MenuPlay />
                        : null
                }
                <Header />
                <ShowKeys />
                <HitZone />
            </AudioProvider>
        </main>
    )
}

export default Play