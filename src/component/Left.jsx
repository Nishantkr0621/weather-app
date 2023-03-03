import React, { useContext } from "react";
import Toggle from "./Toggle";
import { RxDot, RxSun } from "react-icons/rx";
import { BsSunset, BsPlus } from "react-icons/bs";
import { TiLocationArrowOutline } from "react-icons/ti";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { contextData } from "../App";
const Left = () => {
  const { input, setInput, setCityName, data, toggle } =
    useContext(contextData);
  const cityFun = () => {
    setCityName(input);
    setInput("");
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: "20%" }}>
        {/* <button style={{ borderRadius: "7px", fontSize:"19px" ,paddingTop:"5px" , marginTop: "30px" }}>
          <BsPlus />
        </button> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "30px",
            marginLeft: "15px",
            marginRight: "15px",
            justifyContent: "space-between",
          }}
        >
          {/* <div>
            <button
              style={{
                borderRadius: "7px",
                fontSize: "19px",
                paddingTop: "5px",
                backgroundColor: "white",
                color: "rgb(30, 144, 255)",
                // marginTop: "30px"
              }}
            >
              <BsPlus />
            </button>
          </div> */}
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "" }}>
              <input
                type="text"
                placeholder="Enter Place"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  // setCityName(e.target.value);
                }}
                style={{ height: "30px", borderRadius: "4px" }}
              />
            </div>

            <div style={{ paddingBottom: "" }}>
              <button
                style={{
                  borderRadius: "7px",
                  fontSize: "19px",
                  paddingTop: "5px",
                  backgroundColor: "white",
                  color: "rgb(30, 144, 255)",
                }}
                onClick={cityFun}
              >
                <BsPlus />
              </button>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{ marginTop: "7px", marginRight: "4px", color: "white" }}
            >
              <span style={{ marginLeft: "" }}>
                <RxDot />
              </span>
              C
            </div>
            <div>
              <Toggle />
            </div>
            <div style={{ marginTop: "7px", color: "white" }}>
              <span style={{ marginLeft: "" }}>
                <RxDot />
              </span>
              F
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin: "30px",
            color: "white",
          }}
        >
          <div>
            <p>
              <span>
                <TiLocationArrowOutline />
              </span>
              {data.name}
              {"," + data.sys.country}
            </p>
            <p>Todays 04 March</p>
          </div>
          <div>
            {/* <BsSunset /> */}
            <p>
              <BsSunset style={{ paddingRight: "6px" }} />
              07:19
            </p>
            <p>
              <BsSunset style={{ paddingRight: "6px" }} />
              19:32
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: "40%", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "70px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              color: "white",
              paddingTop: "38px",
              paddingRight: "29px",
              fontSize: "20px",
            }}
          >
            <MdOutlineArrowBackIosNew style={{ marginTop: "0px" }} />
          </div>
          <div>
            {/* 27 */}
            {toggle ? (data.main.temp * 1.8 + 32).toFixed(2) : data.main.temp}
            <span style={{ marginLeft: "-20px" }}>
              <RxDot />
            </span>
          </div>
          <div style={{ color: "white", paddingTop: "38px", fontSize: "22px" }}>
            <MdOutlineArrowForwardIos />
          </div>
        </h1>

        <h3 style={{ color: "white", marginTop: "-20px", marginRight: "60px" }}>
          <span style={{ padding: "7px" }}>
            <span style={{ PaddingTop: "8px" }}>
              <RxSun />
            </span>
          </span>
          Sunny
        </h3>
      </div>
    </div>
  );
};
export default Left;
