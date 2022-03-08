import React from "react";
import Function from "./components/Function";
import Functions from "./components/Functions";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import { useState } from "react";

function App() {
  const [functionIdx, setFunctionIdx] = useState(0);
  const [latestChar, setLatestChar] = useState(" ");

  const getCharPress = (char) => {
    console.log(char);
    setLatestChar(char);
    // if (char == "ENTER") setFunctionIdx(functionIdx + 1);
  };

  return (
    <div>
      <Functions functionIdx={functionIdx} latestChar={latestChar} />
      <Keyboard getCharPress={getCharPress} />
    </div>
  );
}

export default App;
