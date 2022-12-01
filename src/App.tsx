import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home'
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listaTema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Routes>

      <Route path='/home' element={<Home />} />

      <Route path='/login' element={<Login />} />

      <Route path='/' element={<Login />} />

      <Route path='/posts' element={<ListaPostagem />} />

      <Route path='/temas' element={<ListaTema />} /> 

      <Route path='/cadastro' element={<CadastroUsuario />} />

      </Routes>
      <Footer />
    </Router>
   </>
  );
}

export default App;



























/* Rodrigo Daniel */
