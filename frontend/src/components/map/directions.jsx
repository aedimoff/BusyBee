import React from 'react';
import useForceUpdate from 'use-force-update';

const Directions = (props) =>  {

  const forceUpdate = useForceUpdate();
  var i = 0;

  function incrementI(click) {
      if (click === "next") {
        i++;
      } else {
        i--;
        }
      return i;
  }

  async function handleClick(click) {
    await incrementI(click); 
    forceUpdate()
  }

  let leg = props.directions[i];
  console.log("iiii", i)

      return (
        <div className="LEGS">
          <h1>
            <p>Destination: {props.directions[i]?.end_address}</p>
            <p>Distance: {props.directions[i]?.distance.text}</p>
            <p>Duration: {props.directions[i]?.duration.text}</p>
          </h1>
          <button onClick={() => handleClick("prev")}>Previous Leg</button>
          <button onClick={() => handleClick("next")}>Next Leg</button>
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
     
  


}



export default Directions;