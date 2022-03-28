import React from "react";
import Functions from "./components/Functions";
import Keyboard from "./components/Keyboard";
import { useState } from "react";
import Graph from "./components/Graph";
import "./dateToFunction.json";

const dateJSON = require("./dateToFunction.json");

const today = new Date();

const date = `${today.getUTCDate()}/${today.getUTCMonth() + 1}`;

const funcString = dateJSON[date];

const func = funcString.split("");

const defaultFunctions = [];

for (let i = 1; i <= 3; i++) {
  defaultFunctions.push({
    chars: Array(func.length).fill(" "),
    colors: Array(func.length).fill(0),
  });
}

if (!localStorage.getItem("today"))
  localStorage.setItem(
    "today",
    `["${date}",${JSON.stringify(defaultFunctions)},0]`
  );

const localLastSession = localStorage.getItem("today");

const lastSession = JSON.parse(localLastSession);

const [lastDate] = lastSession;

if (lastDate !== date)
  localStorage.setItem(
    "today",
    `["${date}",${JSON.stringify(defaultFunctions)},0]`
  );

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

function App() {
  const [won, setWon] = useState(false);
  // const [functionIdx, setFunctionIdx] = useState(0);
  // COLORS 0=blank, 1=grey, 2=yellow, 3=green
  // const [functions, setFunctions] = useState([
  //   { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
  //   { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
  //   { chars: [" ", " ", " ", " ", " "], colors: [0, 0, 0, 0, 0] },
  // ]); cheeky comment for the gh
  const [functionIdx, setFunctionIdx] = useState(
    JSON.parse(localStorage.getItem("today"))[2]
  );
  const [functions, setFunctions] = useState(
    JSON.parse(localStorage.getItem("today"))[1]
  );

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
        if (
          JSON.stringify(newColors) ===
          JSON.stringify(Array(func.length).fill(3))
        ) {
          console.log("win");
          setWon(true);
        }

        newFunctions[functionIdx].colors = newColors;

        const newFunctionIdx = functionIdx + 1;

        setFunctions(newFunctions);
        localStorage.setItem(
          "today",
          `["${date}",${JSON.stringify(newFunctions)},${JSON.stringify(
            newFunctionIdx
          )}]`
        );

        setFunctionIdx(newFunctionIdx);
        localStorage.setItem(
          "today",
          `["${date}", ${JSON.stringify(newFunctions)},${newFunctionIdx}]`
        );
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
