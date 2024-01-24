import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu'
import Home from './pages/Home';
import Post from 'componentes/Post';
import SobreMim from './pages/SobreMim'
import PaginaPadrao from 'componentes/PaginaPadrao';
import Rodape from 'componentes/Rodape';
import NaoEncontrada from 'pages/NaoEncontrada';



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path='/' element={ <PaginaPadrao/> }>
          <Route index element={<Home/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
          <Route path='posts/:id' element={ <Post/> } />
        </Route>

        <Route path='*' element={<NaoEncontrada/>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
