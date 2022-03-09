import React from "react";
import Character from "./Character";

function Function(props) {
  return props.func.chars.map((char, i) => <Character char={char} key={i} />);
}

export default Function;
