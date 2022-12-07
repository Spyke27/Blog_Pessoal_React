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
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
   <>
   <Provider store={store}>
    <Router>
      <Navbar />
    
      <Routes>
      <Route path='/home' element={<Home />} />

      <Route path='/login' element={<Login />} />

      <Route path='/' element={<Login />} />

      <Route path='/posts' element={<ListaPostagem />} />

      <Route path='/temas' element={<ListaTema />} /> 

      <Route path='/cadastro' element={<CadastroUsuario />} />

      <Route path="/formularioPostagem" element={<CadastroPost />} />

      <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

      <Route path="/formularioTema" element={<CadastroTema />} />

      <Route path="/formularioTema/:id" element={<CadastroTema />} />

      <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

      <Route path="/deletarTema/:id" element={<DeletarTema />} />


      </Routes>
      <Footer />
    </Router>
    </Provider>
   </>
  );
}

export default App;



























/* Rodrigo Daniel */
