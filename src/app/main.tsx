import { createRoot } from 'react-dom/client'
//css
import './index.css'
import './main.scss'
//rotas
import { RouterProvider } from 'react-router-dom'
import {router} from './Route/Route.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>,
)
