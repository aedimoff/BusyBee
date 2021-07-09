import React, { useState } from "react";

var i = 0;

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((i) => i + 1);
}

const Directions = (props) => {
  const forceUpdate = useForceUpdate();

  function handleClick(n) {
    i += n;
    forceUpdate();
  }

  let leg = props.directions[i];

  return (
    <div className="LEGS">
      <h1>
        <p>Destination: {leg?.end_address}</p>
        <p>Distance: {leg?.distance.text}</p>
        <p>Duration: {leg?.duration.text}</p>
      </h1>
      <div>
        {i > 0 ? (
          <button onClick={() => handleClick(-1)}>Previous Leg</button>
        ) : (
          ""
        )}
        {i < Object.keys(props.directions).length - 1 ? (
          <button onClick={() => handleClick(1)}>Next Leg</button>
        ) : (
          ""
        )}
      </div>
      <ul className="steps">
        {props.directions[i]?.steps.map((step, i) => (
          <h3 key={i} className="step">
            {step.instructions
              .split("<b>")
              .join(" ")
              .split("</b>")
              .join(" ")
              .split('<div style="font-size:0.9em">')
              .join(" ")
              .split("</div>")
              .join(" ")
              .split("&nbsp;")
              .join(" ")}
            Distance: {step.distance.text}{" "}
          </h3>
        ))}
      </ul>
    </div>
  );
};

export default Directions;
