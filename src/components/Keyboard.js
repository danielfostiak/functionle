import React from "react";
import Input from "./Input";

const chars = [
  "x",
  "y",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "*",
  "^",
  "-",
  "+",
  "=",
  "ENTER",
];

function Keyboard(props) {
  const getCharPress = (char) => {
    props.getCharPress(char);
  };

  return (
    <div>
      {chars.map((char) => (
        <Input char={char} getCharPress={getCharPress} key={char} />
      ))}
    </div>
  );
}

export default Keyboard;
