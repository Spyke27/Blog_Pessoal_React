import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import Tema from "../../../models/Tema";
import "./ListaTema.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TokenState from "../../../store/tokens/tokenReducer";
import { busca } from "../../../services/Service";
import { toast } from "react-toastify";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  let navigate = useNavigate();

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
      navigate("/login");
    }
  }, [token]);

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);

  return (
    <>
      <div className="fundo">
      {temas.map((tema) => (
        <Box m={2}>
          <Card className="cardTemaa" variant="outlined">
            <CardContent>
              <Typography color="inherit" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button  variant="contained" className="btnAtualizarTema marginLeft" size="small" color="primary">
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button className="btnDeletarTema" variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
      {/* <NewTema/> */}
      </div>
    </>
  );
}

export default ListaTema;
