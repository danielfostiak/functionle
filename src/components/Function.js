import React from "react";
import Character from "./Character";

function Function(props) {
  return (
    <div>
      {props.func.chars.map((char, i) => (
        <Character char={char} key={i} />
      ))}
    </div>
  );
}

export default Function;
