import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu'
import Home from './pages/Home';
import Post from 'pages/Post';
import SobreMim from './pages/SobreMim'
import PaginaPadrao from 'componentes/PaginaPadrao';
import Rodape from 'componentes/Rodape';
import NaoEncontrada from 'pages/NaoEncontrada';
import ScrollToTop from 'componentes/ScrollToTop';



function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>

      <Routes>
        <Route path='/' element={ <PaginaPadrao/> }>
          <Route index element={<Home/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
        </Route>

        <Route path='posts/:id/*' element={ <Post/> } />
        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
