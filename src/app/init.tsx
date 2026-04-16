//rotas
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Route.tsx'
//react
import { useEffect } from 'react'
//Services
import {initKeyDown} from '../shared/services/keydownManager.ts'

function Init() {
    useEffect(() => {
        initKeyDown()
    }, [])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Init