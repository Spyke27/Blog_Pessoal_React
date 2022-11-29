import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
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
              <Typography variant="h6" color="inherit">
                Home 
              </Typography>
            </Box>
            
            <Box className="pointer menuu" mx={1}>
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>

            

            <Box className="pointer menuu" mx={1}>
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>

            

            <Box className="pointer menuu" mx={1}>
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            
            

            <Box className="pointer menuu" mx={1}>
              <Link to='/login' className="decoration-none">
              <Typography variant="h6" color="inherit">
                Logout    
              </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
