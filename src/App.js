import React from "react";
import Functions from "./components/Functions";
import Keyboard from "./components/Keyboard";
import { useState } from "react";

const latestSpace = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") return i;
  }
  return -1;
};

const backspace = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== " ") {
      arr[i] = " ";
      return arr;
    }
  }
  return arr;
};

function App() {
  const [functionIdx, setFunctionIdx] = useState(0);
  const [functions, setFunctions] = useState([
    { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
    { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
    { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
  ]);

  const getCharPress = (char) => {
    const latestSpaceIdx = latestSpace(functions[functionIdx].chars);
    const newFunctions = [...functions];

    if (char === "BACK") {
      newFunctions[functionIdx].chars = backspace(
        newFunctions[functionIdx].chars
      );
      setFunctions(newFunctions);
      return;
    }

    if (char === "ENTER") {
      if (latestSpaceIdx === -1) setFunctionIdx(functionIdx + 1);
      return;
    }
    if (latestSpaceIdx === -1) return;

    newFunctions[functionIdx].chars[latestSpaceIdx] = char;
    setFunctions(newFunctions);
  };

  return (
    <div>
      <Functions functions={functions} />
      <Keyboard getCharPress={getCharPress} />
    </div>
  );
}

export default App;
