import React from "react";
import Character from "./Character";
import { useState } from "react";

function Function(props) {
  const { func } = props;

  // const [func, setFunc] = useState(["a", "b", "c", "d", "e"]);
  // return func.map((char) => <Character char={char} key={char} />);
  return func.chars.map((char, i) => <Character char={char} key={i} />);
}

export default Function;
