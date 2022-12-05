import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css';

function Login(){
    /* A maior parte dos hooks precisam de uma variavel para acessar o seu valor e uma função para modificar os seus dados */

    // constante para pegar e modificar, useState precisa indicar qual dado pegar
    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState<UserLogin>({
        usuario: '',
        senha: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=> {
        if(token != ''){
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try{
            await login('/auth/logar', userLogin, setToken)
            alert('Login efetuado com sucesso!')
        }catch(error){
            alert('Usuario não encontrado!')
        }
    }

    return(
        <>
    <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
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

                            <Button type='submit' variant='contained' className='botao'>
                                    Logar
                            </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                           <Link to='/cadastro' className='text-decorator-none'>
                           <Typography variant='subtitle1' gutterBottom align='center' className='textos1 cadastro'>Cadastre-se</Typography>
                           </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'></Grid>
        </Grid>
</>
    )
}
export default Login;

function preventDefault() {
    throw new Error('Function not implemented.');
}
























/* Rodrigo Daniel */