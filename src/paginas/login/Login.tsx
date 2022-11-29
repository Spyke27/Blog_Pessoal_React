import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login(){
    /* A maior parte dos hooks precisam de uma variavel para acessar o seu valor e uma função para modificar os seus dados */

    // constante para pegar e modificar, useState precisa indicar qual dado pegar
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
    <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>

                        <TextField value={userLogin.usuario} onChange={(
                            e: ChangeEvent<HTMLInputElement>
                            ) => updateModel(e)}
                             id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />

                        <TextField value={userLogin.senha} onChange={(
                            e: ChangeEvent<HTMLInputElement>
                        ) => updateModel(e)}
                         id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                            <Button type='submit' variant='contained' color='primary' className='botao'>
                                    Logar
                            </Button>
                            </Link>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'></Grid>
        </Grid>
</>
    )
}
export default Login;