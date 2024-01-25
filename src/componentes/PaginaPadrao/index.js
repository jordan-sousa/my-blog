import Baner from 'componentes/Baner'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao({children}) {
    return(
        <main>
            <Baner/>

            <Outlet />
        </main>
    )
}