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
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo velit consequuntur suscipit
            fugiat, nam quis quod quaerat veritatis et, vel ratione beatae,
            facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore adipisci,
            officia aut quidem dolorum deserunt iure dolorem doloribus velit
            nobis quas consequatur at ullam odit, nesciunt est nulla nihil
            excepturi!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nam quibusdam dolorem incidunt necessitatibus recusandae, ratione, harum, culpa similique sapiente quam a. Cum, eum consequatur temporibus ut ipsam sed ab!Lorem
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime numquam hic quidem, libero facere ad ut quasi veritatis sunt, aliquam temporibus! Sapiente laboriosam reprehenderit doloremque illum iusto inventore odit itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi porro, molestiae fugiat assumenda aliquid sunt reiciendis perspiciatis autem eaque excepturi quod laborum modi amet reprehenderit ducimus est magni cupiditate. Quas?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea omnis exercitationem delectus, sequi magni, voluptate ex esse nostrum tenetur praesentium, dolorem aperiam laboriosam? Magnam asperiores cupiditate libero deleniti dicta totam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit, explicabo labore ab fuga odit tempora. Voluptatem beatae nostrum placeat laborum alias. Perspiciatis dignissimos veritatis quaerat quos quas id labore! <br /><br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo velit consequuntur suscipit
            fugiat, nam quis quod quaerat veritatis et, vel ratione beatae,
            facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore adipisci,
            officia aut quidem dolorum deserunt iure dolorem doloribus velit
            nobis quas consequatur at ullam odit, nesciunt est nulla nihil
            excepturi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo velit consequuntur suscipit
            fugiat, nam quis quod quaerat veritatis et, vel ratione beatae,
            facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore adipisci,
            officia aut quidem dolorum deserunt iure dolorem doloribus velit
            nobis quas consequatur at ullam odit, nesciunt est nulla nihil
            excepturi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo velit consequuntur suscipit
            fugiat, nam quis quod quaerat veritatis et, vel ratione beatae,
            facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore adipisci,
            officia aut quidem dolorum deserunt iure dolorem doloribus velit
            nobis quas consequatur at ullam odit, nesciunt est nulla nihil
            excepturi!
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
