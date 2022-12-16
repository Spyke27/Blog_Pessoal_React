import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import {useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { toast } from 'react-toastify';


function DeletarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    )
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token == "") {
          toast.info('VocÊ Precisa Estar Logado!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/temas')
            deleteId(`/tema/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Tema Deletado!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
        
          function nao() {
            navigate('/temas')
          }
          
  return (
    <>
      <Box m={2} className="containerDeletarTema">
        <Card variant="outlined" className='cardDeletarTema'>
          <CardContent>
            <Box justifyContent="center">
              <Typography  gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography className='cardDeleteTemaTitulo'>
              ➡️ #{tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box className='botoes' ml={1.0} mb={2}>
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="btnSim" size='large'>
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button className="btnNao" onClick={nao} variant="contained" size='large'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
        <Typography className='atencaoDelete'>
        ⚠️ Atenção! Está é uma ação destrutiva e irreversível.
        </Typography>
      </Box>
    </>
  );
}
export default DeletarTema;