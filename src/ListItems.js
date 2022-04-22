import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { ContextConsumer } from "./ContextProvider";
import { useRef } from "react";

function ListItems(props) {
  console.log("Re-render");
  const [state, dispatch] = ContextConsumer();
  console.log(state);

  const [disabled, setDisabled] = useState(true);

  const deleteHandler = (ele) => {
    console.log(ele);
    dispatch({ type: "DELETE", ele });
  };

  const changeHandler = (e, ele, ind) => {
    dispatch({ type: "UPDATE", val: [e.target.value, ele, ind] });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ccc",
        width: { xs: "90%", sm: "80%", md: "60%", lg: "40%" },
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
      p={2}
    >
      {state.map((ele, ind) => (
        <Box
          key={ind}
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Typography>{ele}</Typography> */}
          <TextField
            value={ele}
            disabled={false}
            // onClick={() => setDisabled((prev) => !prev)}
            onChange={(e) => changeHandler(e, ele, ind)}
          />
          <Button variant="contained" onClick={() => deleteHandler(ele)}>
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default ListItems;
