import './App.css';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobremim' element={<SobreMim/>}/>
        <Route path='*' element={<div>pagina não encontrada</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
