import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { toast } from 'react-toastify';

function DeletarPostagem() {

  let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    )
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
          toast.info('Você Precisa Estar Logado!', {
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
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/posts')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Postagem Deletada!', {
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
            navigate('/posts')
          }
   
  return (
    <>
      <Box m={2} className="containerDeletarPostagem">
        <Card variant="outlined" className="cardDeletarPostagem">
          <CardContent>
            <Box justifyContent="center">
              <Typography gutterBottom>
                Deseja Deletar a Postagem:
              </Typography>
              <Typography className='cardDeletePostagemTitulo'>
              ➡️ #{post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box className="botoes" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="btnSim" size='large'>
                Sim
              </Button>
              </Box>
              <Box>
              <Button  className="btnNao" onClick={nao} variant="contained" size='large'>
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
export default DeletarPostagem;

























































/* Desenvolvido por: */
/* Rodrigo Daniel */