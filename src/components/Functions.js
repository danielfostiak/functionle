import React from "react";
import Function from "./Function";

function Functions(props) {
  return (
    <div>
      {props.functions.map((func, i) => {
        return <Function func={func} key={i} />;
      })}
    </div>
  );
}

export default Functions;
