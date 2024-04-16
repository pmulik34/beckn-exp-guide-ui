import React from 'react';
import ClimateHeader from "./ClimateHeader";

const Climate1 = () => {

  return (
    <>
      <ClimateHeader
        logoSrc='/assets/beckn_lg.svg'
        headingLine1='An FMCG company delivers flood-resilient'
        headingLine2 = 'farming advisory to its contract farmers'
      />
      <div className="climate-container">
        <div className="desktop-wrapper">
          <div className="desktop">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src="https://workspace.google.com/intl/en_in/solutions/ai/"
                frameBorder="0"
                allowFullScreen
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: '3rem'}}>
          <img
            src="/assets/videoIcon.svg"
            alt="icon"
            style={{ marginRight: "10px" }}
          />{" "}
          <h3 className="sub-heading">Watch a demo</h3>
        </div>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/cDP7e1BWgek"
          title="Why Does Google Kill So Many Products? | Untangled"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ borderRadius: "5px", marginTop: "20px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Climate1;
