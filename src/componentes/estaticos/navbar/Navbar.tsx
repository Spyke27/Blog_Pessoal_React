import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="bar">
          <Box className="logo">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box className="btn-home" mx={1}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            
            <Box className="pointer" mx={1}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>

            <div className='separador'></div>

            <Box className="pointer" mx={1}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>

            <div className='separador'></div>

            <Box className="pointer" mx={1}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            
            <div className='separador'></div>

            <Box className="pointer" mx={1}>
              <Link to='/login' className="decoration-none">
              <Typography variant="h6" color="inherit">
                logout
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
