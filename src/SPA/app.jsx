import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home'
import Cadastros from '../pages/cadastros';
import LogIn from '../pages/logIn';
import CadastrarSe from '../pages/cadastrarSe';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/logIn" element={<LogIn />}/>
          <Route path="" element={<LogIn />}/>
          <Route path='/cadastrar_se' element={<CadastrarSe/>}/>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}/>
            <Route path="/cadastros" element={<Cadastros/>}/>
            <Route path="/pendencias" element={<Home/>}/>
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
