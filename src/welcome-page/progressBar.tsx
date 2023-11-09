import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import "./progressBar.css";

const ProgressBar = () => {
  const [data, setdata] = useState(0);
  const navigate = useNavigate();

  const n = 100;
  const delay = 30;
  useEffect(() => {
    function loopWithDelay(i: any) {
      setdata(i);
      if (i < n) {
        setTimeout(() => {
          loopWithDelay(i + 1);
        }, delay);
      }
    }
    loopWithDelay(1);
  }, [n]);
  useEffect(() => {
    if (data === 100) {
      console.log("progress-Bar: ", data);
      localStorage.getItem("name") === "himalayas"
        ? navigate("/himalayas")
        : localStorage.getItem("name") === "cities"
        ? navigate("/cities")
        : localStorage.getItem("name") === "cityOfLight"
        ? navigate("/cityOfLight")
        : localStorage.getItem("name") === "cityOfAfrica"
        ? navigate("/cityOfAfrica")
        : localStorage.getItem("name") === "OSC"
        ? navigate("/OSC")
        : localStorage.getItem("name") === "DSEP"
        ? navigate("/DSEP")
        : localStorage.getItem("name") === "UEI"
        ? navigate("/UEI")
        : localStorage.getItem("name") === "dsepUnified"
        ? navigate("/dsep-unified")
        : localStorage.getItem("name") === "DSNP"
        ? navigate("/DSNP")
        : localStorage.getItem("name") === "DHP"
        ? navigate("/DHP")
        : localStorage.getItem("name") === "industry4.0"
        ? navigate("/industry4.0")
        : navigate("/PCM");
    }
  });

  return (
    <div>
      <div className="beckn-image">
        <img
          style={{
            height: "50px",
            width: "161px",
            cursor: "pointer",
          }}
          src="/assets/beckn_lg.svg"
          alt={"Logo"}
        />
      </div>
      <div className="main-containers">
        <div>
          <div className="headingOfHeader">
            <p className="headingOfProgress">
              awesome.. setting up your experience
            </p>
          </div>
          <div className="progress-bar">
            <Progress
              className="progress"
              percent={data}
              status="active"
              strokeColor={{ from: "#108ee9", to: "#523F62" }}
            />
          </div>
          <div className="data-set-container">
            <p className="data-set">Loading...({data}%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
