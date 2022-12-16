import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";
import Image from "./image.png";

function TabPostagem() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar className="tabs" position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="tab" label="Todas as postagens" value="1" />
            <Tab className="tab" label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel className="tabPanel" value="1">
          <Box className="boxTab">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2" className="sobreNos">
        <Box className="sobreNosLeft">
            <img src={Image} alt="Imagem Lateral" />
         </Box>
         <Box className="sobreNosRight">
         <Typography
            variant="h4"
            gutterBottom
            component="h5"
            align="center"
            className="titulo sobreNos"
          >
            Hello World!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
          >
            <span></span>
            <p>Olá, eu me chamo Rodrigo!</p>
            <p>Este é meu blog pessoal, criado no bootcamp da Generation como um dos meus projetos finais, integrando o Backend -NestJs-, onde está o banco de dados -Postgre-, com o Front -React-.</p>
            <p>Projeto 100% funcional com todas as requisições e CRUD, efetuando corretamente a integração entre as tecnologias citadas. </p>
            <p>Sinta-se à vontade para testar e interagir, cadastrando temas e fazendo novas postagens nesta pequena comunidade! 😄</p>
          </Typography>
         </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;

































/* Desenvolvido por: */
/* Rodrigo Daniel */