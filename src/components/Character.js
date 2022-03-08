import React from "react";
import "./Character.css";
// import { useState } from "react";

function Character(props) {
  return (
    <div className="charBox">
      <pre>{props.char}</pre>
    </div>
  );
}

export default Character;
