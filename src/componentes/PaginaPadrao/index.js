import Baner from 'componentes/Baner'
import ScrollToTopButton from 'componentes/ScrollToTopButton'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao({children}) {
    return(
        <main>
            <Baner/>

            <Outlet />
            <ScrollToTopButton/>
        </main>
    )
}