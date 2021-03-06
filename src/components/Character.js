import { Chip } from "@mui/material";
import React from "react";
import "./Character.css";
// import { useState } from "react";

function Character(props) {
  return (
    <div className="charRow">
      {/* <pre className="charBox">{props.char}</pre> */}
      <Chip
        color={
          props.color === 0
            ? "default"
            : props.color === 1
            ? "error"
            : props.color === 2
            ? "warning"
            : "success"
        }
        // variant={props.color === 0 ? "outlined" : "filled"}
        label={<pre>{props.char}</pre>}
      />
    </div>
  );
}

export default Character;
