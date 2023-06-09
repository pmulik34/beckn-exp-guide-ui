import React, { useEffect, useState } from "react";
import "./selectionPage.css";

const SelectionPages = () => {
  const [orderObjectUrl, setOrderObjectUrl] = useState("");

  useEffect(() => {
    const URL = window.location.href;
    if (URL.includes("?")) {
      let start = URL.indexOf("=") + 1;
      const orderObjectUrl = URL.substring(start);
      setOrderObjectUrl(orderObjectUrl);
    }
  }, []);

  return (
    <div className="selectionPage_wrapper">
      <div className="beckn_logo">
        <img src="/assets/beckn_lg.svg" alt="" />
      </div>
      <div style={{ marginBottom: "23px" }}>
        <div>select what would you like to do next?</div>
      </div>
      <div className="selectionPage_wrapper_innr">
        <a
          href={`https://retail-app-infra.becknprotocol.io??external_url=${orderObjectUrl}`}
          target=""
          rel="noopener noreferrer"
        >
          <div className="Link_wrapper">
            <div className="link_img">
              <img src="/assets/Shop.png" alt="" />
            </div>
            <div style={{ fontSize: "20px" }}>shop for items</div>
            <img src="/assets/arrow_forword_ios_24pxnavArrow.png" alt="" />
          </div>
        </a>
        <a
          href={`https://mobility-app-infra.becknprotocol.io??external_url=${orderObjectUrl}`}
          target=""
          rel="noopener noreferrer"
        >
          <div className="Link_wrapper">
            <div className="link_img">
              <img src="/assets/bookRide.png" alt="" />
            </div>
            <div style={{ fontSize: "20px" }}>book a ride</div>
            <img src="/assets/arrow_forword_ios_24pxnavArrow.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SelectionPages;
