import "./App.css";
import ContextProvider from "./ContextProvider";
import AddItem from "./AddItem";
import ListItems from "./ListItems";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useReducer, useState } from "react";

function App() {
  const [data, setData] = useState(["Alarm for Study", "Buy Chocolate"]);

  return (
    <Box className="App">
      <ContextProvider value={data}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", paddingTop: 4, fontWeight: 700 }}
        >
          ToDo App using React Context
        </Typography>
        <AddItem />
        {data.length > 0 ? <ListItems /> : <strong>No Items Found</strong>}
      </ContextProvider>
    </Box>
  );
}

export default App;
