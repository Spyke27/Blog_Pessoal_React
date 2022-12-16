import React, { useEffect } from 'react';
import './Home.css';
import {Button, Grid} from '@material-ui/core';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import TokenState from '../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';

function Home(){

    let navigate = useNavigate();
     const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
     )

    useEffect(()=> {
        if (token == ""){
            toast.warn('Você Precisa Estar Logado!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            navigate("/login")
        }
    })

   return (
    <>
     <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h2" gutterBottom color="textPrimary" component="h2" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/posts' className='decoration-none'>
                        <Button  variant='outlined' className='btn-post'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                <TabPostagem />
                </Grid>
            </Grid>
    </>
   )
}
export default Home;































































/* Desenvolvido por: */
/* Rodrigo Daniel */