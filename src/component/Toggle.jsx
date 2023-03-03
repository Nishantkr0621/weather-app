import React, { useContext } from "react";
import "./toggle.css";
import { contextData } from "../App";
const Toggle = () => {
  const { toggle, setToggle } = useContext(contextData);
  return (
    <>
      <div>
        <label class="switch">
          <input
            type="checkbox"
            value={toggle}
            onChange={() => {
              setToggle(!toggle);
            }}
          />
          <span class="slider round"></span>
        </label>
      </div>
    </>
  );
};

export default Toggle;
