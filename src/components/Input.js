import { Button } from "@mui/material";
import React from "react";

function Input(props) {
  return (
    <Button onClick={() => props.getCharPress(props.char)}>{props.char}</Button>
  );
}

export default Input;
