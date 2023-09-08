import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";
import "./ProgressBar.css";
import { useSearchParams } from "react-router-dom";

const ProgressBar = () => {
  const [data, setData] = useState<number>(0);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const targetRoute = searchParams.get("url");
  const navigate = useNavigate();

  const n = 100;
  const delay = 30;

  useEffect(() => {
    function loopWithDelay(i: number) {
      setData(i);
      if (i < n) {
        setTimeout(() => {
          loopWithDelay(i + 1);
        }, delay);
      } else {
        setAnimationComplete(true);
      }
    }
    loopWithDelay(1);
  }, [n]);

  useEffect(() => {
    if (animationComplete) {
      navigate(targetRoute);
    }
  }, [animationComplete, targetRoute]);

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
