import Content from '../components/Content/Content'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './Home.scss'

function Home() {
    return (
        <main className='home'>
            <Header />
            <Content />
            <Footer/>
        </main>
    )
}

export default Home