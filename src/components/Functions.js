import React from "react";
import { useState } from "react";
import Function from "./Function";

function Functions(props) {
  // const [functionIdx, setFunctionIdx] = useState(0);
  const [functions, setFunctions] = useState([
    { chars: [1, 2, 3, 4, 5], colors: [0, 0, 0, 0, 0] },
    { chars: [6, 7, 8, 9, 10], colors: [0, 0, 0, 0, 0] },
    { chars: [11, 12, 13, 14, 15], colors: [0, 0, 0, 0, 0] },
  ]);

  const newFunctions = functions;
  newFunctions[props.functionIdx].chars = [
    props.latestChar,
    props.latestChar,
    props.latestChar,
    props.latestChar,
    props.latestChar,
  ];
  setFunctions(newFunctions);

  return (
    <div>
      {functions.map((func, i) => {
        if (i == props.functionIdx) {
          console.log(func);
        }
        return <Function func={func} key={i} />;
      })}
    </div>
  );
}

export default Functions;
