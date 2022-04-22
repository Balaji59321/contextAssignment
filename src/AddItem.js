import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { ContextConsumer } from "./ContextProvider";

function AddItem(props) {
  const [state, dispatch] = ContextConsumer();
  const [item, setItem] = useState("");

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const submitHandler = () => {
    dispatch({ type: "ADD", val: item });
    setItem("");
  };
  return (
    <Box
      sx={{
        backgroundColor: "#ccc",
        width: { xs: "95%", sm: "90%", md: "50%", lg: "30%" },
        margin: "30px auto",
        borderRadius: 2,
      }}
      py={2}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 10,
        }}
        p={3}
      >
        <label>
          <strong>Enter Item</strong>
        </label>
        <TextField variant="standard" onChange={changeHandler} value={item} />
      </Box>
      <Button variant="contained" onClick={submitHandler}>
        Submit
      </Button>
    </Box>
  );
}

export default AddItem;
