import React from "react";
import "./tabs.css";
interface selectExpModalProps{
    textURL: string,
    iframeURL: string
}
const chooseExperience: React.FC<selectExpModalProps> = ({textURL, iframeURL}:selectExpModalProps) => {
  return (
    <div
      className="tab-wrappper-content"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        alignItems: "center",
        margin: "40px auto",
      }}
    >
      <div>
      {/* "/assets/text.svg" */}
        <img src={textURL} alt="" />
      </div>
      <div className="smartphone-wrapper">
        <div className="smartphone">
          <div className="content">
          {/* "https://retail-app.becknprotocol.io/" */}
            <iframe
              src={iframeURL}
              frameBorder="0"
              allowFullScreen
              width={"290px"}
              height={"640px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default chooseExperience;