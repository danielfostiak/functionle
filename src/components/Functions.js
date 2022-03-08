import React from "react";
import { useState } from "react";

const functions = [
  ["1", "2", "3", "4", "5"],
  ["1", "2", "3", "4", "5"],
  ["1", "2", "3", "4", "5"],
];

function Functions() {
  const [functionIdx, setFunctionIdx] = useState(0);

  return <div>Functions</div>;
}

export default Functions;
