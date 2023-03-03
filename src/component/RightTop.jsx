import React from "react";

const RightTop = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{}}>
        <h5>Welcome Back Nishant!</h5>
        <p style={{ marginTop: "-14px" }}>
          check out todays weather information
        </p>
      </div>
      <div>
        <img
          style={{ borderRadius: "50px" }}
          alt="img"
          src={
            "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=70&dpr=1"
          }
        />
      </div>
    </div>
  );
};
export default RightTop;
