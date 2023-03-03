import React from "react";
import Chart from "./Chart";

const RightMiddle = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "25px",
        width: "100%",
        height: "40%",
        display: "flex",
        // flexWrap:"wrap",
        flexDirection: "column",
        // alignItems:'center'
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <div>
          <p>Upcoming hours</p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "2%",
            gap: "8px",
          }}
        >
          <div>
            <select style={{ height: "22px", borderRadius: "5px" }}>
              <option value="volvo">Rain precipitation</option>
              <option value="saab">Heat Wave</option>
            </select>
          </div>
          <div>
            <button style={{ height: "22px", borderRadius: "4px" }}>
              Next days
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "7%" }}>
        <Chart />
      </div>
    </div>
  );
};
export default RightMiddle;
