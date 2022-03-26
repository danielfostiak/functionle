import React from "react";
import Character from "./Character";

function Function(props) {
  const { func } = props;

  return (
    <div>
      {/* {props.func.chars.map((char, i) => (
        <Character char={char} key={i} />
      ))} */}
      {[...Array(func.chars.length).keys()].map((i) => (
        <Character char={func.chars[i]} color={func.colors[i]} key={i} />
      ))}
    </div>
  );
}

export default Function;
