import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate()

  function goLogout(){
    setToken('');
    navigate('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="bar">
          <Box className="logo">
            <Typography variant="h5" color="inherit">
              <strong>B</strong>log<strong>P</strong>essoal
              <div className="uuu"></div>
            </Typography>
            
          </Box>

          <Box display="flex" justifyContent="start">
            <Box className="btn-home" mx={1}>
              <Link className="decoration-none" to="/home">
                <Typography variant="h6">
                  Home 
                </Typography>
              </Link>
            </Box>
            
            <Box className="pointer menuu" mx={1}>
            <Link className="decoration-none" to="/posts">
                <Typography variant="h6">
                  Postagens 
                </Typography>
              </Link>
            </Box>

            

            <Box className="pointer menuu" mx={1}>
            <Link className="decoration-none" to="/temas">
                <Typography variant="h6">
                  Temas 
                </Typography>
              </Link>
            </Box>

            

            <Box className="pointer menuu" mx={1}>
            <Link className="decoration-none" to="/cadastrarTema">
                <Typography variant="h6">
                  Cadastrar Tema 
                </Typography>
              </Link>
            </Box>
            
            <Box onClick={goLogout} className="pointer menuu" mx={1}>
              <Typography variant="h6">
                Logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
