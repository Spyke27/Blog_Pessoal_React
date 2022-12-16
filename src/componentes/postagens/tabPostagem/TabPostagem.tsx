import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import ListaPostagem from "../listapostagem/ListaPostagem";
import "./TabPostagem.css";

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
          <Typography
            variant="h5"
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
            
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;

































/* Desenvolvido por: */
/* Rodrigo Daniel */