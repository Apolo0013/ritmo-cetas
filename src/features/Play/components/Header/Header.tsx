import HeaderLogo from '../../../../shared/UI/HeaderLogo/HeaderLogo'
import './Header.scss'

function Header() {
    return (    
        <header className='play-header'>
            <HeaderLogo />
            <div className='play-header-info'>
                <h2>Score: <strong>0000</strong></h2>
                <h2>Combo: <strong>0</strong></h2>
            </div>
        </header>
    )
}

export default Header