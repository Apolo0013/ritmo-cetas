import { createRoot } from 'react-dom/client'
//css
import './index.css'
import './main.scss'
//Init
import Init from './init'


createRoot(document.getElementById('root')!).render(
    <main className="App">
        <Init />
    </main>
)
