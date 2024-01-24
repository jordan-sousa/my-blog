import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu'
import Home from './pages/Home';
import SobreMim from './pages/SobreMim'
import PaginaPadrao from 'componentes/PaginaPadrao';
import Rodape from 'componentes/Rodape';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={ <PaginaPadrao/> }>
          <Route index element={<Home/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
        </Route>

        <Route path='*' element={<div>pagina não encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
