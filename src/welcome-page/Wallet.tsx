import React, { useEffect, useState } from "react";
import "./Wallet.css";

function Wallet() {
  const [orderObject, setOrderObject] = useState<any>(null);

  useEffect(() => {
    const URL = window.location.href;
    if (URL.includes("?")) {
      const queryString = URL.split("?")[1];
      const decodedObject = window.atob(queryString);
      setOrderObject(JSON.parse(decodedObject));
    }
  }, []);

  if (!orderObject) {
    return <></>;
  }

  return (
    <div className="wallet-wrapper">
      <div className="header-wallet">
        <img src="/assets/walletIcon.svg" alt="" />
        <div className="header-text">Travel io</div>
      </div>
      <div className="img-container">
        <img
          className="item-image"
          src={orderObject.order.item[0].descriptor.images[0]}
          alt=""
        />
      </div>
      <div className="wrappper">
        <div className="wallet-content">
          <div className="content-heading">BOOKING DETAILS</div>
          <div className="content-sub-heading">
            #4537353 The Orchad Greens Resort & SPA,Log Huts Area Rd, Old
            Manali, Manali, Himachal Pradesh 175131
          </div>
          <div className="order-details">
            <div>
              <div className="content-heading">BOOKED ON</div>
              <div className="content-sub-heading">21 JUN 2021, 12:21pm</div>
            </div>
            <div>
              <div className="content-heading">TRAVELLERS</div>
              <div className="content-sub-heading">
                {orderObject.order.item[0].quantity}
              </div>
            </div>

            <div>
              <div className="content-heading">TOTAL PRICE</div>
              <div className="content-sub-heading">
                Rs.{orderObject.order.item[0].price.value}
              </div>
            </div>
          </div>
        </div>

        <div className="wallet-footer">
          <img src="/assets/walletIcon.svg" alt="" />
          <img src="/assets/nfc.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Wallet;
