import React, { useEffect, useState } from "react";
import { Modal, Carousel, Tabs } from "antd";
import "./tabs.css";
import VideoTemplate from "../videoTemplate/videoTemplate";

const contentStyle: React.CSSProperties = {
  margin: 0,
  width: "100%",
};

const settings = {
  nextArrow: <div></div>,
  prevArrow: <div></div>,
};

const OndcFlow = () => {
  const [open, setOpen] = useState(false);
  useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = (current: number) => {
    setCurrentSlide(current);
  };

  const next = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  return (
    <div className="ONDC_Fflow_wrapper">
      <div className="QR-wrapper ONDC_flow_QRcode">
        <div className="ondc_QR_custom">
          <img src="/assets/ONDC_OR.svg" />
          <p className="ondc_Qr_text">Scan to download the Pincode App.</p>
        </div>
      </div>

      <div className="ondc_network_flow">
        <div className={"ondc_network_tab_wrapper"}>
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: "Network Participants",
                key: "1",
                children: (
                  <div className="ondc_map_wrapper">
                    <div>
                      <div className="ondc_network_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/byerIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ paddingBottom: "12px" }}>
                            Buyer Platforms
                          </div>
                          <div
                            style={{
                              fontSize: "32px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            13
                          </div>
                        </div>
                      </div>
                      <div className="ondc_network_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/handIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ paddingBottom: "12px" }}>
                            Seller Platforms
                          </div>
                          <div
                            style={{
                              fontSize: "32px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            43
                          </div>
                        </div>
                      </div>
                      <div className="ondc_network_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/logisticIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ marginBottom: "-6px" }}>
                            Logistics Provider Platforms
                          </div>
                          <div
                            style={{
                              fontSize: "32px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            13
                          </div>
                        </div>
                      </div>
                      <div className="ondc_network_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/totalIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ paddingBottom: "12px" }}>
                            Total Platforms
                          </div>
                          <div
                            style={{
                              fontSize: "32px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            69
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="/assets/ondcMap.svg" />
                    </div>
                  </div>
                ),
              },
              {
                label: "Orders on ONDC",
                key: "2",
                children: (
                  <div>
                    <div className="ondc_map_wrapper ondc_order">
                      <div className="ondc_network_card ondc_order_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/carIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ paddingBottom: "16px" }}>
                            Mobility Orders
                          </div>
                          <div
                            style={{
                              fontSize: "24px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            24.5 Mn
                          </div>
                        </div>
                      </div>
                      <div className="ondc_network_card ondc_order_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/shopIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ marginBottom: "-4px" }}>
                            Retail & Logistics Orders
                          </div>
                          <div
                            style={{
                              fontSize: "24px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            10.5 Mn
                          </div>
                        </div>
                      </div>
                      <div className="ondc_network_card ondc_order_card">
                        <div className="ondc_network_left_card">
                          <img src="/assets/cartIcon.svg" />
                        </div>
                        <div className="ondc_network_right_card">
                          <div style={{ paddingBottom: "16px" }}>
                            Total Orders
                          </div>
                          <div
                            style={{
                              fontSize: "24px",
                              fontWeight: "600",
                              color: "#696868",
                            }}
                          >
                            35 Mn
                          </div>
                        </div>
                      </div>
                    </div>
                    <Carousel arrows {...settings}>
                      <div style={contentStyle}>
                        <img src="/assets/ONDC_chart1.svg" />
                      </div>
                      <div style={contentStyle}>
                        <img src="/assets/ONDC_chart2.svg" />
                      </div>
                      <div style={contentStyle}>
                        <img src="/assets/ONDC_chart3.svg" />
                      </div>
                    </Carousel>
                  </div>
                ),
              },
            ]}
          />
          <div onClick={() => setOpen(true)} className="ondc_playBtn">
            <img src="/assets/playIcon_Large.svg" alt={"playIcon"} />
          </div>
        </div>
      </div>

      {/* /// button modal and data /// */}

      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"unset"}
        className="ondc_video_modal"
      >
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      </Modal>
    </div>
  );
};

export default OndcFlow;
