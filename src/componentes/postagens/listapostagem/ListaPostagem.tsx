import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";
import { Card, CardActions, CardContent, Button, Typography} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaPostagem.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { ClassNames } from "@emotion/react";
import { toast } from "react-toastify";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  let navigate = useNavigate();

  useEffect(() => {
    if (token == "") {
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
      navigate("/login");
    }
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getPost();
  }, [posts.length]);



  return (
    <>
      <div className="postagens">     
      {posts.map((post) => (
        <Box className="boxCards">
          <Card className="boxCard">
            <CardContent>
              {/* <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography> */}
              <Typography variant="body2" component="p" className="cardTema">
                #{post.tema?.descricao}
              </Typography> 
              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>

            </CardContent>
            <CardActions>
              <Box className="btnCard" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" className="btnAtualizar marginLeft" size="small">
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" className="btnDeletar">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
      </div>
    </>
  );
}

export default ListaPostagem;
