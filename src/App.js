import React from "react";
import Functions from "./components/Functions";
import Keyboard from "./components/Keyboard";
import { useState, useEffect } from "react";
import Graph from "./components/Graph";

/* useHelperExpression() can only be used inside <GraphingCalculator/>,
which is why this couldn't go in <Demo/> */
// function Point() {
//   const a = useHelperExpression({ latex: "a" });

//   let label;
//   if (a > 0) label = "positive x-axis";
//   else if (a < 0) label = "negative x-axis";
//   else label = "origin";

//   return <Expression id="point" latex="(a,0)" label={label} showLabel />;
// }

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

const getColors = (arr, correctArr) => {
  const dummyArr = [...arr];
  const dummyCorrectArr = [...correctArr];
  const results = []; // COLORS 0=blank, 1=grey, 2=yellow, 3=green
  // Check for all greens
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === correctArr[i]) {
      results[i] = 3;
      dummyArr[i] = "GREEN";
      dummyCorrectArr[i] = "GREEN";
    }
  }
  // dummyArr = dummyArr.filter((el) => el !== "REMOVE GREEN");
  // dummyCorrectArr = dummyCorrectArr.filter((el) => el !== "REMOVE GREEN");

  // Get oranges
  for (let i = 0; i < arr.length; i++) {
    if (dummyArr[i] === "GREEN") continue;
    const correctIdx = dummyCorrectArr.indexOf(dummyArr[i]);
    if (correctIdx > -1) {
      results[i] = 2;
      dummyArr[i] = "YELLOW";
      dummyCorrectArr[i] = "YELLOW";
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (dummyArr[i] !== "GREEN" && dummyArr[i] !== "YELLOW") {
      results[i] = 1;
      dummyArr[i] = "GREY";
      dummyCorrectArr[i] = "GREY";
    }
  }

  return results;
};

const func = ["x", "^", "2", "-", "x"];
const funcString = func.join("");
// fresh REAL
// swees GUESS

function App() {
  const [won, setWon] = useState(false);
  const [functionIdx, setFunctionIdx] = useState(0);
  // COLORS 0=blank, 1=grey, 2=yellow, 3=green
  const [functions, setFunctions] = useState([
    { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
    { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
    { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
  ]);

  console.log(functions);

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
      if (latestSpaceIdx === -1) {
        const newColors = getColors(functions[functionIdx].chars, func);
        console.log(newColors);
        if (JSON.stringify(newColors) === JSON.stringify([3, 3, 3, 3, 3])) {
          console.log("win");
          setWon(true);
        }

        newFunctions[functionIdx].colors = newColors;
        setFunctions(newFunctions);
        setFunctionIdx(functionIdx + 1);
      }
      return;
    }
    if (latestSpaceIdx === -1) return;

    newFunctions[functionIdx].chars[latestSpaceIdx] = char;
    setFunctions(newFunctions);
  };

  return (
    <>
      <h2>functionle</h2>
      <Graph func={`y = ${funcString}`} />
      <div>
        <Functions functions={functions} />
        {!won ? <Keyboard getCharPress={getCharPress} /> : <p>WINNER</p>}
      </div>
    </>
  );
}

export default App;
