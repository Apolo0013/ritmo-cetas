import './404.scss'
//imagem
import ImgHome from '../../../shared/assets/home.svg'
import { useNavigate } from 'react-router-dom'

function Page404() {
    //navegador
    const nv = useNavigate()
    return (
        <div className="wraper-page-404">
            <div className="page-404">
                <h1 className='title-404'>404</h1>
                <h2 className='sub-title-404'>Página não encontrada</h2>
                <p>A página que você está procurando não existe ou foi movida para outro lugar.</p>
                <button
                    className='btn-404'
                    onClick={() => {
                        nv("/home") // Voltar pro home
                    }}
                >
                    <div>
                        <img
                            src={ImgHome}
                            alt="imagem de um casa"
                        />
                    </div>
                    <p>Voltar para home</p>
                </button>
            </div>
        </div>
    )
}

export default Page404