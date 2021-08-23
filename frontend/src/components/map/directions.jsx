import React, { useState } from "react";
import './directions.scss';

var i = 0;

function useDirectionsUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue((i) => i + 1);
}

const Directions = (props) => {
  const updateDirections = useDirectionsUpdate();

  function handleClick(n) {
    i += n;
    updateDirections();
  }

  

  let leg = props.directions[i];

  return (
    <div className="directions-container">
      {Object.keys(props.directions).length ? (
      <div className="directions">
          <div className="direction-legs">
            <h1>
              <p>Destination: {leg?.end_address}</p>
              <p>Distance: {leg?.distance.text}</p>
              <p>Duration: {leg?.duration.text}</p>
            </h1>
            <div className="d-buttons">
              {i > 0 ? (
                <button className="direction-buttons" onClick={() => handleClick(-1)}>Previous Leg</button>
              ) : (
                ""
              )}
              {i < Object.keys(props.directions).length - 1 ? (
                <button className="direction-buttons" onClick={() => handleClick(1)}>Next Leg</button>
              ) : (
                ""
              )}
            </div>

          <ul className="steps">
            {props.directions[i]?.steps.map((step, i) => (
              <h3 key={i} className="step-item">
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
                  .join(" ")
                  .split("<wbr/>")
                  .join(" ")}
                Distance: {step.distance.text}{" "}
              </h3>
            ))}
          </ul>
        </div>
        </div>
        ) : (
          ""
        )}
    </div>
  );
};

export default Directions;
