import React from "react";
import {
  Expression,
  GraphingCalculator,
  useHelperExpression,
} from "desmos-react";

function Graph(props) {
  return (
    <GraphingCalculator
      attributes={{ className: "calculator" }}
      fontSize={18}
      keypad={false}
      expressions={false}
      settingsMenu={false}
      showResetButtonOnGraphpaper={false}
    >
      <Expression id="graph1" latex={props.func} />
    </GraphingCalculator>
  );
}

export default Graph;
