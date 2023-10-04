import { QRCode, Button, Modal, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalHTML from "../ModalHTML/modalHTML";
import "./tabs.css";
export interface selectExpModalProps {
  textURL: string;
  iframeURL?: string | undefined;
  languageEng?: string;
  languageFra?: string;
  setTourismUrl?: Function;
  retailsModal?: boolean;
  pulseEnergy?: string;
}
const ChooseExperience: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
  languageEng,
  languageFra,
  setTourismUrl,
  retailsModal,
  pulseEnergy,
}: selectExpModalProps) => {
  const osmEngUrl = process.env.REACT_APP_OSM_ENG_URL;
  const pcmDriverUrl = process.env.REACT_APP_PCM_DRIVER_URL;
  const pcmPcAppUrl = process.env.REACT_APP_PCM_PC_APP_URL;
  const cityOfLightFaUrl = process.env.REACT_APP_CITY_OF_LIGHT_FRENCH_URL;
  const tourismAppStagingInfraUrl =
    process.env.REACT_APP_TOURISM_APP_STAGING_INFRA_URL;
  const pulseEnergyWhatsappUrl =
    process.env.REACT_APP_PULSE_ENERGY_WHATSAPP_URL;

  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const cityOfLight = localStorage.getItem("name") === "cityOfLight";
  const OSC = localStorage.getItem("name") === "OSC";
  const himalayas = localStorage.getItem("name") === "himalayas";
  const cities = localStorage.getItem("name") === "cities";
  const PCM = localStorage.getItem("name") === "PCM";
  const DSEP = localStorage.getItem("name") === "DSEP";
  const UEI = localStorage.getItem("name") === "UEI";
  const navigate = useNavigate();

  const [lang, setLang] = useState("english");
  const [isModalOpenOSC, setIsModalOpenOSC] = useState(false);
  const [isModalOpenPC, setIsModalOpenPC] = useState(false);
  const [isModalOpenDriver, setSsModalOpenDriver] = useState(false);
  const [isModalOpenOSCRetailer, setIsModalOpenOSCRetailer] = useState(false);
  const [isModalOpenDSEP, setIsModalOpenDSEP] = useState(false);

  const showModalPC = () => {
    setIsModalOpenPC(true);
  };
  const showModalDriver = () => {
    setSsModalOpenDriver(true);
  };
  const showModalOSC = () => {
    setIsModalOpenOSC(true);
  };
  const showModalOSCretailer = () => {
    setIsModalOpenOSCRetailer(true);
  };
  const showModalDSEP = () => {
    setIsModalOpenDSEP(true);
  };

  const handleCancelPC = () => {
    setIsModalOpenPC(false);
  };
  const handleCancelDriver = () => {
    setSsModalOpenDriver(false);
  };
  const handleCancelOSC = () => {
    setIsModalOpenOSC(false);
  };
  const handleCancelRetailer = () => {
    setIsModalOpenOSCRetailer(false);
  };
  const handleCancelDSEP = () => {
    setIsModalOpenDSEP(false);
  };

  return (
    <div
      className={
        PCM
          ? "tab-wrappper-content PCM_details"
          : pulseEnergy
          ? "tab-wrappper-content pulse_energy"
          : "tab-wrappper-content"
      }
    >
      <div>
        <img src={textURL} alt="header-content-text" />

        {!cityOfAfrica && !himalayas && !cities && !DSEP && !UEI ? (
          <div
            style={{
              padding: "10px 0",
              fontSize: "16px",
            }}
          >
            <span
              onClick={(e: any) => {
                setLang(e.target.textContent);
                setTourismUrl!(
                  `${OSC ? { osmEngUrl } : { tourismAppStagingInfraUrl }} `
                );
              }}
              style={{
                paddingRight: "8px",
                cursor: "pointer",
                fontWeight: `${lang === "english" ? "unset" : "300"}`,
                pointerEvents: `${lang === "english" ? "none" : "unset"}`,
              }}
            >
              {languageEng}
            </span>
            |
            <span
              style={{
                paddingLeft: "8px",
                fontWeight: `${lang === "français" ? "unset" : "300"}`,
                pointerEvents: `${lang === "français" ? "none" : "unset"}`,
                cursor: "pointer",
              }}
              onClick={(e: any) => {
                setLang(e.target.textContent);
                setTourismUrl!(
                  `${
                    OSC
                      ? navigate("/OSC-Fa")
                      : PCM
                      ? navigate("/PCM-Fa")
                      : cityOfLight
                      ? navigate("/CityOfLightFa")
                      : ""
                  }`
                );
              }}
            >
              {languageFra}
            </span>
          </div>
        ) : null}
        {DSEP ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalDSEP}
              style={{ left: "unset", margin: "unset", marginTop: "20px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalHTML
              open={isModalOpenDSEP}
              onCancel={handleCancelDSEP}
              modalHeading={
                "follow these steps for the best possible experience as a customer!"
              }
              step1={"step 1"}
              step1Img={"/assets/DSEP_step1.svg"}
              step1Text={
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    login to the{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      Skill Seeker
                    </span>
                    <br /> app using the provided:
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                        marginTop: "10px",
                      }}
                    >
                      phone number:
                    </p>
                    <p>6251423251</p>
                  </p>
                  <p>
                    <p style={{ fontWeight: "bolder", color: "#000" }}>
                      6 digit{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                          textTransform: "uppercase",
                        }}
                      >
                        OTP
                      </span>
                    </p>
                    <p>726345</p>
                  </p>
                </div>
              }
              step2={"step 2"}
              step2Img={"/assets/DSEP_step2.svg"}
              step2Text={
                <div className="text_wrapper_modal">
                  <p>
                    From landing page <br />
                    search for course,
                  </p>
                  <p>
                    e.g. :{""}{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      Design{" "}
                    </span>
                  </p>
                </div>
              }
              step3={"step 3"}
              step3Img={"/assets/DSEP_step3.svg"}
              step3Text={
                <div className="text_wrapper_modal">
                  <p>
                    from your search list select <br />
                    the course e.g. :
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p>
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        Design Thinking{" "}
                      </span>
                      and proceed with the checkout flow.
                    </p>
                  </p>
                </div>
              }
              step4={"step 4"}
              step4Img={"/assets/DSEP_step4.svg"}
              step4Text={
                <div className="text_wrapper_modal">
                  <p>
                    Billing details you may <br />
                    need to proceed:
                  </p>
                  <p
                    style={{
                      marginTop: "2px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    name:
                  </p>
                  <p>Santosh Kumar</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    address:
                  </p>
                  <p>151-E, Janpath Road, New Delhi</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    phone number:
                  </p>
                  <p>6251423251</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    email id:
                  </p>
                  <p>santosh.k@gmail.com</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Payment Method:
                  </p>
                  <p>free course</p>
                </div>
              }
              step5={"step 5"}
              step5Img={"/assets/DSEP_step5.svg"}
              step5Text={
                <div className="text_wrapper_modal">
                  <p>
                    <span
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      You
                    </span>{" "}
                    can start learning by <br />
                    clicking {""}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      "start course"
                    </span>{" "}
                  </p>
                  <p>which will take you to the course details page.</p>
                </div>
              }
            />
          </div>
        ) : null}
        {OSC ? (
          <div className="PCM_modal OSM_custom">
            {!retailsModal ? (
              <>
                <Button type="primary" onClick={showModalOSC}>
                  instructions
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <ModalHTML
                  open={isModalOpenOSC}
                  onCancel={handleCancelOSC}
                  modalHeading={
                    "follow these steps for the best possible experience as a customer!"
                  }
                  step1={"step 1"}
                  step1Img={"/assets/OSM_step1_img.svg"}
                  step1Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Sign in to the Open Street Commerce app using the
                        provided:
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          phone number:
                        </p>
                        <p> 5678990532</p>
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          6 digit{" "}
                          <span style={{ textTransform: "uppercase" }}>
                            OTP
                          </span>
                        </p>
                        <p> 456012</p>
                      </p>
                    </div>
                  }
                  step2={"step 2"}
                  step2Img={"/assets/OSM_step2_img.svg"}
                  step2Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>From the map view</p>
                      <p
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        select location:
                      </p>
                      <p
                        style={{
                          paddingBottom: "10px",
                        }}
                      >
                        {" "}
                        Ménilmontant - Pelleport, Paris, France
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          select the option:
                        </p>
                        <p>'restaurant'</p>
                      </p>
                      <p style={{}}>
                        <p>select the restaurant</p>
                        <p
                          style={{
                            fontWeight: "bolder",
                            color: "#000",
                            paddingBottom: "10px",
                          }}
                        >
                          benoit castle.
                        </p>
                        <p>
                          {" "}
                          Click{" "}
                          <span
                            style={{
                              fontWeight: "bolder",
                              textTransform: "capitalize",
                            }}
                          >
                            ‘Shop’{" "}
                          </span>
                        </p>
                      </p>
                    </div>
                  }
                  step3={"step 3"}
                  step3Img={"/assets/OSM_step3-img.svg"}
                  step3Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Order a cheesecake for yourself :)
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        There are multiple delivery services to choose from!
                      </p>
                    </div>
                  }
                  step4={"step 4"}
                  step4Img={"/assets/OSM_step4_img.svg"}
                  step4Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Information you may need for placing your order
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Name:
                        </p>
                        <p>Lisa</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Address:
                        </p>
                        <p>quai jacqus, paris, france</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Phone Number:
                        </p>
                        <p>5678990532</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Email ID:
                        </p>
                        <p>lisa@email.com</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Payment Method:
                        </p>
                        <p>Cash on Delivery</p>
                      </p>
                    </div>
                  }
                  step5={"step 5"}
                  step5Img={"/assets/OSM_step5_img.svg"}
                  step5Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        <span style={{ textTransform: "capitalize" }}>
                          {" "}
                          Once
                        </span>{" "}
                        the order is placed, you can track your order!
                      </p>
                    </div>
                  }
                />
              </>
            ) : (
              <>
                <Button type="primary" onClick={showModalOSCretailer}>
                  instructions
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <ModalHTML
                  className1="none"
                  classNameWidth={"modal_width"}
                  open={isModalOpenOSCRetailer}
                  onCancel={handleCancelRetailer}
                  modalHeading={
                    "follow these steps for the best possible experience as a seller!"
                  }
                  step1={"step 1"}
                  step1Img={"/assets/OSM_step1_img.svg"}
                  step1Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        You are about to login as a ‘seller’ for{" "}
                        <span style={{ fontWeight: "bolder" }}>ClicPaye.</span>{" "}
                        This application helps manage products and process
                        orders on the
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          ‘Open Street Commerce’
                        </p>
                      </p>
                      <p>
                        <p>Login details:</p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          phone number:
                        </p>
                        <p> 9876522222</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Password:
                        </p>
                        <p> root123</p>
                      </p>
                    </div>
                  }
                  step2={"step 2"}
                  step2Img={"/assets/BPP_step2_img.svg"}
                  step2Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Here are few things you can do on{""}{" "}
                        <span style={{ fontWeight: "bolder" }}>ClicPaye:</span>{" "}
                      </p>

                      <ul>
                        <li>View/manage orders placed in your store </li>
                        <li>View all products in your store</li>
                        <li>Manage all products in your store</li>
                      </ul>
                    </div>
                  }
                  step3={"step 3"}
                  step3Img={"/assets/BPP_step3_img.svg"}
                  step3Text={
                    <div className="text_wrapper_modal">
                      <p>
                        The activities you perform on{" "}
                        <span style={{ fontWeight: "bolder" }}>ClicPaye</span>{" "}
                        gets reflected on the
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <span style={{ fontWeight: "bolder" }}>
                          ‘Open Street Commerce’{" "}
                        </span>
                        app.
                      </p>
                    </div>
                  }
                />
              </>
            )}
          </div>
        ) : null}
      </div>
      {PCM ? (
        <div className="QR-wrapper">
          <Tabs
            className={"QR_Innr"}
            defaultActiveKey="1"
            items={[
              {
                label: (
                  <div>
                    <span style={{ color: "#696868" }}>
                      pass{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        Culture
                      </span>
                    </span>
                  </div>
                ),
                key: "1",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmPcAppUrl || "-"}
                    />
                    <p style={{ textAlign: "center" }}>scan to see how!</p>
                    <Button type="primary" onClick={showModalPC}>
                      instructions
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <ModalHTML
                      open={isModalOpenPC}
                      onCancel={handleCancelPC}
                      modalHeading={
                        "follow these steps for the best possible experience as a passenger!"
                      }
                      step1={"step 1"}
                      step1Img={"/assets/PC_step1_img.svg"}
                      step1Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            sign in to the pass{" "}
                            <span style={{ textTransform: "capitalize" }}>
                              culture
                            </span>
                            <br /> app using the provided:
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              email address:
                            </p>
                            <p>enterthefuture01@gmail.com</p>
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              password:
                            </p>
                            <p style={{ textTransform: "capitalize" }}>
                              Test@1234567
                            </p>
                          </p>
                        </div>
                      }
                      step2={"step 2"}
                      step2Img={"/assets/PC_step2_img.svg"}
                      step2Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            using{" "}
                            <span style={{ fontWeight: "700", color: "#000" }}>
                              pass{" "}
                              <span style={{ textTransform: "capitalize" }}>
                                Culture
                              </span>{" "}
                            </span>{" "}
                            app search for an event and
                            <br /> reserve
                          </p>
                        </div>
                      }
                      step3={"step 3"}
                      step3Img={"/assets/PC_step3_img.svg"}
                      step3Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            from the reservation confirmation page select <br />{" "}
                            the third option: <br />{" "}
                            <span style={{ fontWeight: "700", color: "#000" }}>
                              {""}‘
                              <span style={{ textTransform: "capitalize" }}>
                                Show
                              </span>{" "}
                              travel options’
                              <br />{" "}
                            </span>
                            and select
                            <span style={{ fontWeight: "700", color: "#000" }}>
                              {""} 'taxi'
                            </span>
                          </p>
                        </div>
                      }
                      step4={"step 4"}
                      step4Img={"/assets/PC_step4_img.svg"}
                      step4Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            ensure that you specify:
                          </p>

                          <p style={{ fontWeight: "700", color: "#000" }}>
                            the pick-up location:
                          </p>
                          <p>quai jacques chirac, 75007 paris, france </p>

                          <p
                            style={{
                              fontWeight: "700",
                              paddingTop: "15px",
                              color: "#000",
                            }}
                          >
                            the drop-off location:
                          </p>
                          <p>app will pick up this location. </p>
                        </div>
                      }
                      step5={"step 5"}
                      step5Img={"/assets/PC_step5_img.svg"}
                      step5Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            sit tight and wait for your <br /> cab to arrive,
                            and you'll be <br /> all set to embark on your{" "}
                            <br />
                            journey!
                          </p>
                        </div>
                      }
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div className="" style={{ display: "flex" }}>
                    <div>
                      <span style={{ color: "#696868" }}>alliance taxi</span>
                    </div>
                  </div>
                ),
                key: "2",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmDriverUrl || "-"}
                    />
                    <p>scan to see how!</p>
                    <Button type="primary" onClick={showModalDriver}>
                      instructions
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <ModalHTML
                      open={isModalOpenDriver}
                      onCancel={handleCancelDriver}
                      modalHeading={
                        "follow these steps for the best possible experience as a driver!"
                      }
                      step1={"step 1"}
                      step1Img={"/assets/driver_step1_img.svg"}
                      step1Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            sign in as a ‘driver’ using <br /> the following
                            information:
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              phone number
                            </p>
                            <p> 9493143166</p>
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              4 digit{" "}
                              <span style={{ textTransform: "uppercase" }}>
                                OTP
                              </span>
                            </p>
                            <p> 7891</p>
                          </p>
                        </div>
                      }
                      step2={"step 2"}
                      step2Img={"/assets/driver_step2_img.svg"}
                      step2Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            ride request needs to be triggered from{" "}
                            <span style={{ fontWeight: "bolder" }}>
                              {" "}
                              pass{" "}
                              <span style={{ textTransform: "capitalize" }}>
                                Culture
                              </span>
                            </span>{" "}
                            app the toggle must be{" "}
                            <span
                              style={{
                                fontWeight: "bolder",
                                textTransform: "capitalize",
                              }}
                            >
                              “ON”{" "}
                            </span>
                            to receive new ride requests.
                          </p>
                        </div>
                      }
                      step3={"step 3"}
                      step3Img={"/assets/driver_step3_img.svg"}
                      step3Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            accept the ride!
                          </p>
                        </div>
                      }
                      step4={"step 4"}
                      step4Img={"/assets/driver_step4_img.svg"}
                      step4Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            enter the{" "}
                            <span
                              style={{
                                fontWeight: "bolder",
                                textTransform: "uppercase",
                              }}
                            >
                              OTP
                            </span>{" "}
                            received from the passenger and start the ride.
                          </p>
                        </div>
                      }
                      step5={"step 5"}
                      step5Img={"/assets/driver_step5_img.svg"}
                      step5Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            payment will be completed by customer after the
                            ride!
                          </p>
                        </div>
                      }
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      ) : pulseEnergy ? (
        <div className="QR-wrapper">
          <div className="QR_custom QR_custom_pulse_energy">
            <QRCode
              className="QR_code_pulse_energy"
              value={pulseEnergyWhatsappUrl || "_"}
            />
            <p style={{ paddingBottom: "15px" }}>Or</p>
            <a
              href={pulseEnergyWhatsappUrl || "_"}
              target={"/"}
              style={{ cursor: "pointer" }}
            >
              <img src="/assets/whatsappImg.svg" />
            </a>
          </div>
        </div>
      ) : (
        <div className="smartphone-wrapper">
          <div className="smartphone">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src={iframeURL}
                frameBorder="0"
                allowFullScreen
                scrolling={!OSC && !DSEP ? "no" : "yes"}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseExperience;
