import React, { useState } from "react";

var i = 0;

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((i) => i + 1);
}

const Directions = (props) => {
  const forceUpdate = useForceUpdate();

  function fuckingWork(n) {
    i += n;
    forceUpdate();
  }

  console.log("in fuckingwork", Object.keys(props.directions).length);
  let leg = props.directions[i];

  return (
    <div className="LEGS">
      {console.log("LORD HAVE MERCY", props.directions.length)}
      <h1>
        <p>Destination: {leg?.end_address}</p>
        <p>Distance: {leg?.distance.text}</p>
        <p>Duration: {leg?.duration.text}</p>
      </h1>
      <div>
        {i > 0 ? (
          <button onClick={() => fuckingWork(-1)}>Previous Leg</button>
        ) : (
          "fuck"
        )}
        {i <= Object.keys(props.directions).length ? (
          <button onClick={() => fuckingWork(1)}>Next Leg</button>
        ) : (
          Object.keys(props.directions).length
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
