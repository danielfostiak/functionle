import React from "react";
import "./Character.css";
// import { useState } from "react";

function Character(props) {
  return (
    <div className="charRow">
      <pre className="charBox">{props.char}</pre>
    </div>
  );
}

export default Character;
