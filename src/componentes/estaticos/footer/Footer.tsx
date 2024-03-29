import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import './Footer.css';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import TokenState from "../../../store/tokens/tokenReducer";


function Footer(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    var footerComponent

    return(
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='contate-se'>Entre em Contato</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank">
                            <FacebookIcon className='redes' />
                        </a>
                        <a href="https://www.instagram.com/rodrigodaniel_27/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/in/rodrigo-daniell/" target="_blank">
                            <LinkedInIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a className='decoration_none' target="_blank" href="https://github.com/Spyke27">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">blog-pessoal.com.br</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    )
}
export default Footer;






















































/* Desenvolvido por: */
/* Rodrigo Daniel */