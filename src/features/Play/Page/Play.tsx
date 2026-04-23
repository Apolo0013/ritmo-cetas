import Header from '../components/Header/Header'
import HitZone from '../components/HitZone/HitZone'
import ShowKeys from '../components/ShowKeys/ShowKeys'
import './Play.scss'

function Play() {
    return (
        <main className='play'>
            <Header />
            <ShowKeys />
            <HitZone />
        </main>
    )
}

export default Play