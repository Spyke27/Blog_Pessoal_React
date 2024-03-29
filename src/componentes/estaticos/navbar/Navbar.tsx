import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToken } from "../../../store/tokens/action";
import TokenState from "../../../store/tokens/tokenReducer";
import "./Navbar.css";

function Navbar() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
 )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function goLogout(){
    dispatch(addToken(''));
    navigate('/login')

    toast.info('Usuario Deslogado!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }
  const linkmenu = document.querySelector('.menuu')

  var navbarComponent

  if(token !== ''){
    navbarComponent = 
    <AppBar position="static">
    <Toolbar variant="dense" className="bar">
      <Link to='/home' className="linkLogo">
      <Box className="logo">
        <Typography variant="h5">
          <strong>B</strong>log<strong>P</strong>essoal
          <div className="uuu"></div>
        </Typography>
      </Box>
      </Link>

      <Box display="flex" justifyContent="start">
        <Box className="btn-home" mx={1}>
          <Link className="decoration-none" to="/home">
            <Typography variant="h6">
              Home 
            </Typography>
          </Link>
        </Box>
        
        <Box className="pointer menuu ativar" mx={1}>
        <Link className="decoration-none" to="/posts">
            <Typography variant="h6">
              Postagens 
            </Typography>
          </Link>
        </Box>

        

        <Box className="pointer menuu ativar" mx={1}>
        <Link className="decoration-none" to="/temas">
            <Typography variant="h6">
              Temas 
            </Typography>
          </Link>
        </Box>

        

        <Box className="pointer menuu ativar" mx={1}>
        <Link className="decoration-none" to="/formularioTema">
            <Typography variant="h6">
              Cadastrar Tema 
            </Typography>
          </Link>
        </Box>
        
        <Box onClick={goLogout} className="pointer menuu ativar" mx={1}>
          <Typography variant="h6">
            Logout
          </Typography>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}
export default Navbar;

































































/* Desenvolvido por: */
/* Rodrigo Daniel */