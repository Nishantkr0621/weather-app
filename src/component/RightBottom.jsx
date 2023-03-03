import React from "react";

import { GiDroplets } from "react-icons/gi";
import { FiWind, FiCloudSnow, FiSun } from "react-icons/fi";
import { BsThermometerHigh, BsCloudRainHeavy } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import { Circle, Line } from "rc-progress";
const RightBottom = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",

        justifyContent: "flex-start",
        width: "100%",
        height: "45%",
        marginLeft: "3%",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "13rem",
          height: "7rem",
          margin: "0.5rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Humidity</p>
          <GiDroplets
            style={{
              backgroundColor: " rgb(79,134,247)",
              color: "white",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          />
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          84%
          <span style={{ fontWeight: "lighter", marginLeft: "3px" }}>bad</span>
        </div>
        <div style={{ width: "70%", marginLeft: "14%", marginBottom: "15px" }}>
          <Line
            percent={42}
            strokeColor="Blue"
            strokeWidth={4}
            trailColor="gray"
            trailWidth={4}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "13rem",
          height: "7rem",
          margin: "0.5rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Wind</p>
          <FiWind
            style={{
              backgroundColor: " rgb(79,134,247)",
              color: "white",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          />
        </div>

        <div
          style={{
            width: "40%",
            marginLeft: "32%",
            marginBottom: "15px",
            height: "5%",
          }}
        >
          <span
            style={{
              fontSize: 15,
              color: "black",
              fontWeight: "bold",
              // paddingTop: "80px",
              marginLeft: "20px",
            }}
          >
            8km/h
          </span>
          <Circle
            style={{ width: "60px", marginLeft: "12px" }}
            percent={84}
            strokeColor="Blue"
            strokeWidth={6}
            trailColor="gray"
            trailWidth={6}
            gapPosition="bottom"
            gapDegree="180"
          />

          <span
            style={{
              fontSize: 15,
              color: "green",
              // paddingTop: "80px",
              marginTop: "120px",
            }}
          >
            8km/h
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "13rem",
          height: "7rem",
          margin: "0.5rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Precipitation</p>
          <FiCloudSnow
            style={{
              backgroundColor: " rgb(79,134,247)",
              color: "white",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          />
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>1.4cm</div>
        <div style={{ width: "70%", marginLeft: "14%", marginBottom: "15px" }}>
          <Line
            percent={42}
            strokeColor="Blue"
            strokeWidth={4}
            trailColor="gray"
            trailWidth={4}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "13rem",
          height: "7rem",
          margin: "0.5rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>UV Index</p>
          <FiSun
            style={{
              backgroundColor: " rgb(79,134,247)",
              color: "white",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          />
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          4
          <span style={{ fontWeight: "lighter", marginLeft: "3px" }}>
            medium
          </span>
        </div>
        <div style={{ width: "70%", marginLeft: "14%", marginBottom: "15px" }}>
          <Line
            percent={42}
            strokeColor="Blue"
            strokeWidth={4}
            trailColor="gray"
            trailWidth={4}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "13rem",
          height: "7rem",
          margin: "0.5rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Feels like</p>
          <BsThermometerHigh
            style={{
              backgroundColor: " rgb(79,134,247)",
              color: "white",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          />
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          30
          <span style={{ textAlign: "" }}>
            <RxDot style={{ fontSize: "10px" }} />
          </span>
        </div>
        <div style={{ width: "70%", marginLeft: "14%", marginBottom: "15px" }}>
          <Line
            percent={30}
            strokeColor="Blue"
            strokeWidth={4}
            trailColor="gray"
            trailWidth={4}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "13rem",
          height: "7rem",
          margin: "0.5rem",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Chance of rain</p>
          <BsCloudRainHeavy
            style={{
              backgroundColor: " rgb(79,134,247)",
              color: "white",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          />
        </div>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>42%</div>
        <div style={{ width: "70%", marginLeft: "14%", marginBottom: "15px" }}>
          <Line
            percent={42}
            strokeColor="Blue"
            strokeWidth={4}
            trailColor="gray"
            trailWidth={4}
          />
        </div>
      </div>
    </div>
  );
};
export default RightBottom;
