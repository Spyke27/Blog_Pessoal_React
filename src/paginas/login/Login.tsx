import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { addToken } from '../../store/tokens/action';
import './Login.css';

function Login(){
    /* A maior parte dos hooks precisam de uma variavel para acessar o seu valor e uma função para modificar os seus dados */

    // constante para pegar e modificar, useState precisa indicar qual dado pegar
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [token, setToken] = useState('')
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
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try{
            await login('/auth/logar', userLogin, setToken)

            toast.success('Usuário Logado!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        }catch(error){
            toast.error('Usuario Não Encontrado!', {
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