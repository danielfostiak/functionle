import React from "react";
import { useState, useEffect } from "react";
import Function from "./Function";

function Functions(props) {
  // const [functionIdx, setFunctionIdx] = useState(0);
  // move all this into App.js and just pass in data as prop, way easier, less clean doe.

  useEffect(() => {
    console.log("rerender");
  }, [props.functions]);

  return (
    <div>
      {props.functions.map((func, i) => {
        return <Function func={func} key={i} />;
      })}
    </div>
  );
}

export default Functions;
