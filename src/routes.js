import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu'
import Home from './pages/Home';
import SobreMim from './pages/SobreMim'



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={<div>pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
