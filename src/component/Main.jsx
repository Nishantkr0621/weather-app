import React from "react";
import Right from "./Right";
import "./main.css";
import Left from "./Left";
const Main = () => {
  return (
    <div
      className="Img"
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        borderRadius: "20px",
      }}
    >
      <div style={{ width: "35%", height: "100%" }}>
        <Left />
      </div>
      <div
        style={{
          width: "65%",
          height: "100%",

          backgroundColor: "rgb(231,254,255)",
          borderRadius: "20px",
        }}
      >
        <Right />
      </div>
      {/* </div> */}
    </div>
  );
};
export default Main;
