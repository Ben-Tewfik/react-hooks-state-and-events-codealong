import React, { useState } from "react";

function Toggle() {
  // let isOn = true;
  const [isOn, setIsOn] = useState(false);
  const color = isOn ? "red" : "white";
  return (
    <button
      onClick={() => setIsOn(isOn => !isOn)}
      style={{ background: color }}
    >
      {isOn ? "On" : "Off"}
    </button>
  );
}

export default Toggle;
