import React from "react";
import Character from "./Character";
import { useState } from "react";

function Function() {
  const [func, setFunc] = useState([" ", "b", "c", "d", "e"]);
  return func.map((char) => <Character char={char} key={char} />);
}

export default Function;
