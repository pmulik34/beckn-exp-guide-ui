import React, { useState, useRef } from "react";
import { QRCode, Button, Modal, Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import ModalHTML from "../ModalHTML/modalHTML";
import ModalSlider from "../ModalHTML/ModalSlider";
import {
  signCiTransaction,
  signPayloadWithExtension,
} from "../../utility/signTransaction";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";

import "./tabs.css";
export interface selectExpModalProps {
  headingText?: string;
  btmHeading?: string;
  textURL: string;
  descriptionText?: string;
  iframeURL?: string | undefined;
  languageEng?: string;
  languageFra?: string;
  setTourismUrl?: Function;
  retailsModal?: boolean;
  pulseEnergy?: string;
  iframeRef?: any;
}
const ChooseExperience: React.FC<selectExpModalProps> = ({
  headingText,
  btmHeading,
  textURL,
  descriptionText,
  iframeURL,
  languageEng,
  languageFra,
  setTourismUrl,
  retailsModal,
  pulseEnergy,
  iframeRef,
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
  const dsepUnified = localStorage.getItem("name") === "dsepUnified";
  const DSNP = localStorage.getItem("name") === "DSNP";
  const isDsnpFeed = iframeURL === process.env.REACT_APP_DSNP_APP_URL_FEED;
  const ODR = localStorage.getItem("name") === "ODR";
  const DHP = localStorage.getItem("name") === "DHP";
  const isIndustry = localStorage.getItem("name") === "industry4.0";
  const navigate = useNavigate();

  const [lang, setLang] = useState("english");
  const [isModalOpenOSC, setIsModalOpenOSC] = useState(false);
  const [isModalOpenPulseEnergy, setIsModalOpenPulseEnergy] = useState(false);
  const [isModalOpenDsepUnified, setIsModalOpenDsepUnified] = useState(false);
  const [isModalOpenDHP, setIsModalOpenDHP] = useState(false);
  const [isModalOpenDSNP, setIsModalOpenDSNP] = useState(false);
  const [isModalOpenPC, setIsModalOpenPC] = useState(false);
  const [isModalOpenDriver, setSsModalOpenDriver] = useState(false);
  const [isModalOpenOSCRetailer, setIsModalOpenOSCRetailer] = useState(false);
  const [isModalOpenDSEP, setIsModalOpenDSEP] = useState(false);
  const [isModalOpenCityOfAfrica, setIsModalOpenCityOfAfrica] = useState(false);
  const [isModalOpenhimalayas, setIsModalOpenhimalayas] = useState(false);
  const [isModalOpencities, setIsModalOpencities] = useState(false);
  const [isModalOpenCityOfLight, setIsModalOpenCityOfLight] = useState(false);
  const [isModalOpenisIndustry, setIsModalOpenisIndustry] = useState(false);
  const [isModalOpenisODR, setIsModalOpenisODR] = useState(false);

  // TODO Improve polka extension connect logic
  React.useEffect(() => {
    async function handleMessage(event: MessageEvent) {
      if (
        `${event.origin}/` !== process.env.REACT_APP_DSNP_APP_URL ||
        !event.data.type
      )
        return;
      const iframeWindow = iframeRef.current.contentWindow;
      switch (event.data.type) {
        case "enablePolka":
          let enabled = await web3Enable("Social Web Example Client");
          if (enabled.length > 0) {
            const allAccounts = await web3Accounts();
            iframeWindow.postMessage(
              { type: "polkaAccounts", data: allAccounts },
              "*"
            );
          }
          break;
        case "signTransaction":
          const signedChallenge = await signPayloadWithExtension(
            event.data.data.selectedAccount,
            event.data.data.challenge
          );
          iframeWindow.postMessage(
            { type: "signTransaction", data: { signedChallenge } },
            "*"
          );
          break;
        case "signCiTransaction":
          const { handleSignature, addProviderSignature } =
            await signCiTransaction(event.data.data);
          iframeWindow.postMessage(
            {
              type: "signCiTransaction",
              data: {
                handleSignature,
                addProviderSignature,
                handle: event.data.data.handle,
                signingAccount: event.data.data.signingAccount,
              },
            },
            "*"
          );
          break;
        default:
          console.log("No event");
          break;
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const showModalPC = () => {
    setIsModalOpenPC(true);
  };
  const showModalDriver = () => {
    setSsModalOpenDriver(true);
  };
  const showModalOSC = () => {
    setIsModalOpenOSC(true);
  };
  const showModalPulseEnergy = () => {
    setIsModalOpenPulseEnergy(true);
  };
  const showModalDsepUnified = () => {
    setIsModalOpenDsepUnified(true);
  };
  const showModalCityOfLight = () => {
    setIsModalOpenCityOfLight(true);
  };
  const showModalDHP = () => {
    setIsModalOpenDHP(true);
  };
  const showModalDSNP = () => {
    setIsModalOpenDSNP(true);
  };
  const showModalCityOfAfrica = () => {
    setIsModalOpenCityOfAfrica(true);
  };
  const showModalhimalayas = () => {
    setIsModalOpenhimalayas(true);
  };
  const showModalcities = () => {
    setIsModalOpencities(true);
  };
  const showModalisIndustry = () => {
    setIsModalOpenisIndustry(true);
  };
  const showModalisODR = () => {
    setIsModalOpenisODR(true);
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
  const handleCancelPulseEnergy = () => {
    setIsModalOpenPulseEnergy(false);
  };
  const handleCancelDsepUnified = () => {
    setIsModalOpenDsepUnified(false);
  };
  const handleCancelCitiOfLight = () => {
    setIsModalOpenCityOfLight(false);
  };
  const handleCancelDSNP = () => {
    setIsModalOpenDSNP(false);
  };
  const handleCancelDHP = () => {
    setIsModalOpenDHP(false);
  };
  const handleCancelCityOfAfrica = () => {
    setIsModalOpenCityOfAfrica(false);
  };
  const handleCancelhimalayas = () => {
    setIsModalOpenhimalayas(false);
  };
  const handleCancelcities = () => {
    setIsModalOpencities(false);
  };
  const handleCancelisIndustry = () => {
    setIsModalOpenisIndustry(false);
  };
  const handleCancelisODR = () => {
    setIsModalOpenisODR(false);
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
          ? "tab-wrappper-content pulse_energy "
          : UEI
          ? "tab-wrappper-content UEI"
          : "tab-wrappper-content"
      }
    >
      <div className="text_wrapper">
        <div className="heading-text">{headingText}</div>
        <img
          src={textURL}
          alt="header-content-text"
          style={{ marginBottom: "-10px" }}
        />
        <div className="heading-text" style={{ lineHeight: "unset" }}>
          {btmHeading}
        </div>
        <div className="description-text">{descriptionText}</div>

        {!cityOfAfrica &&
        !himalayas &&
        !cities &&
        !DSEP &&
        !UEI &&
        !dsepUnified &&
        !DSNP &&
        !DHP &&
        !isIndustry &&
        !ODR ? (
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
                        <p>Antoine Dubois</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Address:
                        </p>
                        <p>15 Rue du Soleil, Paris, France</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Phone Number:
                        </p>
                        <p>0612345678</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Email ID:
                        </p>
                        <p>antoine.dubois@gmail.com</p>
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
                        <p> 9845114558</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Password:
                        </p>
                        <p> venky12</p>
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
        {/* /////// */}

        {UEI ? (
          <div className="PCM_modal OSM_custom UEI_modal">
            <Button
              type="primary"
              onClick={showModalPulseEnergy}
              style={{ marginTop: "116px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenPulseEnergy}
              onCancel={handleCancelPulseEnergy}
              modalHeading={
                "follow these steps for the best possible experience for Unified energy Interface"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/UEI_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      Scan the QR code{" "}
                    </span>
                    to access Pulse Energy's WhatsApp chat window
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    initiate the conversation with a greeting like "Hi."
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/UEI_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    Share the location as per the request made by Pulse Energy.
                  </p>

                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      paddingBottom: "10px",
                    }}
                  >
                    confirm location.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/UEI_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      select
                    </span>{" "}
                    4W (4 wheeler).
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    From the available Charger List,
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      select
                    </span>{" "}
                    "Pulse Energy HQ”
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/UEI_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    You will see 2 options:
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    1) ₹15/Unit (Bescom) and
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    2) ₹13/Unit (UEI) option.
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      select
                    </span>{" "}
                    the 2nd option ₹13/Unit (UEI).
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Enter
                    </span>{" "}
                    the amount above{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ₹
                    </span>
                    10, (e.g. ₹20)
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/UEI_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    It will ask for payment options such as UPI and Link.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Select any one option; the demand note will be created.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    No further action required on WhatsApp for Pulse Energy.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Click on{" "}
                    </span>{" "}
                    ‘sheru app’ for next step
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/UEI_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>login to sheru app:</p>
                    <p>
                      email-{" "}
                      <span style={{ textDecoration: "underline" }}>
                        ueidemo@sheru.se
                      </span>
                    </p>
                    <p>password - ueidemo</p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      select{" "}
                    </span>
                    ‘Check Demands’
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    A list of available demand notes will be displayed. select
                    one option and{" "}
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      click{" "}
                    </span>{" "}
                    ‘Buy’
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    success message will be displayed;
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 7
                </h3>
                <img src={"/assets/UEI_step7.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    next,{" "}
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      click
                    </span>{" "}
                    ‘Check Suppliers’.
                  </p>

                  <p
                    style={{
                      paddingBottom: "10px",
                    }}
                  >
                    Turno, the green energy supplier, will show the list of
                    energy available.
                  </p>
                  <p
                    style={{
                      paddingBottom: "10px",
                    }}
                  >
                    Select one and{" "}
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      click
                    </span>{" "}
                    Buy.
                  </p>
                  <p
                    style={{
                      paddingBottom: "10px",
                    }}
                  >
                    success message will be displayed;{" "}
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      select
                    </span>{" "}
                    ‘view order summary
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 8
                </h3>
                <img src={"/assets/UEI_step8.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    order summary screen will display:
                  </p>
                  <ul>
                    <li>Cash Outflow for Demand Notes</li>
                    <li>Cash Outflow for Supply to Turno</li>
                    <li>Approximate Earnings from Supply to the Grid</li>
                  </ul>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 9
                </h3>
                <img src={"/assets/UEI_step9.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    on order summary screen,{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Click
                    </span>{" "}
                    ‘push to grid’
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    ‘Push to Grid’ is Sheru's readiness to feed green energy
                    from Turno into the grid.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 10
                </h3>
                <img src={"/assets/UEI_step10.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    access your ‘order history’ page in the Sheru app from the
                    3-dot menu on the Home Page.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    screen will provide detailed description of cash outflow of
                    demand notes, suppy and earnings
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Click on
                    </span>{" "}
                    ‘turno app’ for next steps
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 11
                </h3>
                <img src={"/assets/UEI_step11.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    You'll see the details of energy suppliers like Turno, the
                    green energy producer that fulfills demands for companies
                    like Sheru after storing it in batteries.
                  </p>
                  <p>details include: battery id, </p>
                  <p style={{ paddingBottom: "10px" }}>
                    capacity of units it can fulfill, and price.
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}

        {cityOfLight ? (
          <div className="PCM_modal OSM_custom">
            <Button type="primary" onClick={showModalCityOfLight}>
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
                alt="arrowback"
              />
            </Button>
            <ModalSlider
              open={isModalOpenCityOfLight}
              onCancel={handleCancelCitiOfLight}
              modalHeading={
                "follow these steps for the best possible experience as a traveller!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/himalayas_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    using of
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      {" "}
                      city of lights
                    </span>{" "}
                    app, search for{" "}
                    <span style={{ fontWeight: "bolder", color: "#000" }}>
                      paris, france{" "}
                    </span>
                    from the search results select:
                    <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        Louvre Museum Exhibition - EACH
                      </span>
                    </p>
                    <p style={{ paddingBottom: "10px" }}>
                      <span>click on </span>{" "}
                      <span style={{ fontWeight: "bolder", color: "#000" }}>
                        book now
                      </span>{" "}
                      & set number of traveler’s to{" "}
                      <span style={{ fontWeight: "bolder", color: "#000" }}>
                        02
                      </span>
                    </p>
                    <span>
                      and then click on{" "}
                      <span style={{ fontWeight: "bolder", color: "#000" }}>
                        checkout
                      </span>{" "}
                      to continue.
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img
                  src={"/assets/cityOfLightstep2.svg"}
                  alt={`StepImage`}
                  style={{ borderRadius: "100px" }}
                />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter traveller details:
                  </p>
                  <p>
                    <p>
                      name:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        Lisa
                      </span>{" "}
                    </p>
                    <span>
                      mobile:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        0612345678
                      </span>
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      lisa.k@gmail.com
                    </span>
                  </p>
                  <p>
                    pincode:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      75001
                    </span>
                  </p>
                  <p>
                    address:
                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      15 Rue du Soleil, Paris, France
                    </span>
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    click on
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “save traveler details”
                    </span>
                    button.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/cityOfLightstep3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “proceed to pay”{" "}
                    </span>
                    button .
                    <br />
                    select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “pay on arrival”{" "}
                    </span>
                    as your payment methodand click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ”confirm”{" "}
                    </span>
                    to continue <br />
                    click on
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “view booking”{" "}
                    </span>
                    button to view booking details
                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      scan qr code{" "}
                    </span>
                    to import your order into retail application.{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/cityOfLightstep4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>
                    <p style={{ paddingBottom: "10px" }}>
                      click on{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        “yes! show me the list”{" "}
                      </span>{" "}
                      button to get the AI generated list of items that you
                      might require for your travel.select :{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        Art{" "}
                      </span>{" "}
                      from the list
                    </p>
                    <p>
                      click on{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        select delivery location{" "}
                      </span>
                      button & select the delivery location
                    </p>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/cityOfLightstep5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    add{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      items{" "}
                    </span>
                    to the cart from the list,
                  </p>
                  <br />
                  <p>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      view & billing{" "}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img
                  src={"/assets/cityOfLightstep6new.svg"}
                  alt={`StepImage`}
                />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter billing details:
                  </p>
                  <p>
                    <p>
                      name:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        Lisa
                      </span>{" "}
                    </p>
                    <span>
                      mobile:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        0612345678
                      </span>
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      lisa.k@gmail.com
                    </span>
                  </p>
                  <p>
                    pincode:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      75001
                    </span>
                  </p>
                  <p>
                    address:
                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      15 Rue du Soleil, Paris, France
                    </span>
                  </p>
                  <p style={{ marginTop: "15px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “save billing details”{" "}
                    </span>
                    button.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 7
                </h3>
                <img src={"/assets/cityOfLightstep6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter shipping details:
                  </p>
                  <p>
                    <p>
                      name:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        Lisa
                      </span>{" "}
                    </p>
                    <span>
                      mobile:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        0612345678
                      </span>
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      lisa.k@gmail.com
                    </span>
                  </p>
                  <p>
                    pincode:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      75001
                    </span>
                  </p>
                  <p>
                    address:
                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      15 Rue du Soleil, Paris, France
                    </span>
                  </p>
                  <p style={{ marginTop: "15px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “save shipping details”{" "}
                    </span>
                    button.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 8
                </h3>
                <img src={"/assets/cityOfLightstep10.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “confirm”{" "}
                    </span>
                    <p style={{ marginTop: "10px", paddingBottom: "10px" }}>
                      select payment mode as{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        “cash on delivery” .{" "}
                      </span>
                    </p>
                    click on view order to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      view order{" "}
                    </span>{" "}
                    details
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 9
                </h3>
                <img src={"/assets/cityOfLightstep8.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      scan qr code{" "}
                    </span>
                    from travelio app again to import your order into mobility
                    application.
                  </p>
                  <p>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “yes! let’s go”{" "}
                    </span>
                    button to see best travel options to reach your location
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 10
                </h3>
                <img src={"/assets/cityOfLightstep9.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    your pickup location will be your current location{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      'Paris Charles de Gaulle Airport (CDG), Roissy-en-France,
                      France'
                    </span>
                    <p style={{ margin: "10px 0px" }}>
                      select your drop off location as
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {" "}
                        'Eiffel Tower, Avenue Anatole France, Paris, France '
                      </span>{" "}
                      and then click on
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {" "}
                        “search rides”
                      </span>
                    </p>
                    select rides offered by
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      best Taxi{" "}
                    </span>
                    from the search results
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 11
                </h3>
                <img src={"/assets/cityOfLightstep11.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>
                    select payment method as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “cash”{" "}
                    </span>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “book now”{" "}
                    </span>
                    <p style={{ margin: "10px 0px" }}>
                      as soon as driver accepts the ride request your ride will
                      start.
                    </p>
                    as soon as you reach your destination please{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      pay your driver by cash{" "}
                    </span>{" "}
                    to the end ride.
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}

        {dsepUnified ? (
          <div className="PCM_modal OSM_custom">
            <Button type="primary" onClick={showModalDsepUnified}>
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
                alt="arrowback"
              />
            </Button>
            <ModalSlider
              open={isModalOpenDsepUnified}
              onCancel={handleCancelDsepUnified}
              modalHeading={
                "follow these steps for the best possible experience as a customer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/unified_dsep_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    sign in to the SkillUp {""}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      SkillUp{" "}
                    </span>
                    app :
                  </p>
                  <p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      email address:{" "}
                    </p>
                    <p>santosh.k@gmail.com</p>
                  </p>
                  <p
                    style={{
                      paddingBottom: "20px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    password:{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      Test@12345
                    </span>
                  </p>
                  <p
                    style={{
                      paddingBottom: "20px",
                    }}
                  >
                    or
                  </p>
                  <p>sign up using below details:</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                    >
                      Suraj
                    </span>
                  </p>

                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    email address:{" "}
                  </p>
                  <p>suraj@gmail.com</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    password:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                    >
                      Test@12345
                    </span>
                  </p>
                </div>
              </>
              {/* <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/unified_dsep_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    create a profile using the provided details:
                  </p>

                  <p>
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    phone no:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    upload documents
                  </p>
                  <p>
                    and click{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘create profile’
                    </span>
                  </p>
                </div>
              </> */}
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/unified_dsep_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    on the landing page, click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘courses’
                    </span>{" "}
                    or{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘search for courses’
                    </span>{" "}
                    with{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      'Agile'
                    </span>{" "}
                    for yourself :)
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/unified_dsep_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    from your search list, choose the course{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ' Agile Scrum Project Management - EACH'
                    </span>{" "}
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘add to cart’
                    </span>
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    you can{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      'check for scholarship'
                    </span>{" "}
                    for this course on the cart
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/unified_dsep_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    by clicking on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘search more scholarships’
                    </span>
                    , select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ' Agile Excellence Scholarship'
                    </span>{" "}
                    scholarship from the list and{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘apply’
                    </span>{" "}
                    with the given details
                  </p>
                  <p>
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    phone no:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>upload documents</p>
                  <p>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘submit’
                    </span>{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/unified_dsep_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    once your scholarship is approved, you can{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘complete your course payment’
                    </span>{" "}
                    with{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘approved scholarship’
                    </span>{" "}
                    from scholarship list
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/unified_dsep_step7.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    once your course is reserved, you can find course in{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘my learnings’.{" "}
                    </span>
                  </p>

                  <p
                    style={{
                      paddingBottom: "10px",
                    }}
                  >
                    select your course and start learning
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 7
                </h3>
                <img src={"/assets/unified_dsep_step8.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    after finishing the course, you can begin applying for{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘jobs’
                    </span>{" "}
                    from the landing page.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 8
                </h3>
                <img src={"/assets/unified_dsep_step9.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on the suitable job{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ’Agile Project Manager’
                    </span>{" "}
                    from{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘jobs’
                    </span>{" "}
                    list.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    read the job description and proceed with{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘apply now’
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 9
                </h3>
                <img
                  src={"/assets/unified_dsep_step10.svg"}
                  alt={`StepImage`}
                />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    you will need the following details to apply for the job:
                  </p>
                  <p>
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    phone no:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </span>
                  </p>
                  <p>
                    documents:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘pre populated document’
                    </span>{" "}
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ’submit application’
                    </span>
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}

        {DSNP ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalDSNP}
              style={{ left: "unset", margin: "unset", marginTop: "116px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenDSNP}
              onCancel={handleCancelDSNP}
              modalHeading={
                <>
                  "follow these steps for the best possible experience as a
                  customer!"
                  <div className="heading_description">
                    <p>
                      <span style={{ fontWeight: "bolder", color: "#000" }}>
                        Pre-requisites:
                      </span>{" "}
                      <a
                        href="https://polkadot.js.org/extension/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Click here
                      </a>{" "}
                      to install{" "}
                      <span style={{ fontWeight: "bolder", color: "#000" }}>
                        "Polkadot JS"
                      </span>{" "}
                      (a browser add-on). Polkadot allows account creation and
                      import from blockchain ledger devices for extrinsic
                      signature.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        paddingTop: "5px",
                      }}
                    >
                      <img
                        src="/assets/!Icon.svg"
                        alt=""
                        style={{
                          paddingTop: "1px",
                        }}
                      />
                      <p
                        style={{
                          fontWeight: "500",
                          fontSize: "15px",
                          paddingLeft: "8px",
                          textTransform: "unset",
                        }}
                      >
                        Please keep note of your generated username, password,
                        and secret key for ‘Polkadot JS’ account recovery
                      </p>
                    </div>
                  </div>
                </>
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/DSNP_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "20px" }}>
                    select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘retail store’
                    </span>{" "}
                    tab on the landing page.
                  </p>
                  <p style={{ paddingBottom: "20px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘sign up and login’{" "}
                    </span>{" "}
                    to ‘open common’ retail app.
                  </p>
                  <p style={{ paddingBottom: "20px" }}>
                    on the landing page,{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      search for ‘sunglasses’
                    </span>
                  </p>
                  <p style={{ paddingBottom: "20px" }}>
                    Select the product you wish to buy.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/DSNP_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    proceed to payment and checkout. Details you may need:
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                  >
                    Name:
                  </p>
                  <p>Santosh Kumar</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                  >
                    Address:
                  </p>
                  <p>15 Rue du Soleil, Paris, France</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                  >
                    Phone Number:
                  </p>
                  <p>0612345678</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                  >
                    Email ID:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>santosh.k@gmail.com</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      textTransform: "capitalize",
                    }}
                  >
                    Payment Method:
                  </p>
                  <p>Cash on Delivery</p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/DSNP_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    once the order is placed, you can give feedback and rating
                    for the product by clicking on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘submit review’
                    </span>{" "}
                    button.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    system will ask user for permission to post a review on DSNP
                    social feed, user selects{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘OK’
                    </span>
                    , user then select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘check review’
                    </span>{" "}
                    to see the review posted on social feed.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    user can also see the same by selecting the tab{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘dsnp app’
                    </span>
                    .{" "}
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/DSNP_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>
                    visits DSNP ID creation and login page from{" "}
                    <a
                      style={{ textDecoration: "underline" }}
                      href="https://dsnp-social-web.becknprotocol.io/feed"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    If you have a DSNP ID, input the handle and continue.
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    Don't have a DSNP ID?
                  </p>
                  <ul>
                    <li>create new Handle.</li>
                    <li>
                      Select the Polkadot JS extension account from the
                      dropdown.
                    </li>
                    <li>
                      The Polkadot JS plugin will require account
                      authentication.
                    </li>
                    <li>
                      Enter username and password then navigate to experience
                      center
                    </li>
                  </ul>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/DSNP_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    on the social feed page, you can see the review of the item
                    and sees the tag{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘verified purchase’
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    to logout, user can select there{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘username’
                    </span>{" "}
                    & select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘sign out’
                    </span>
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}
        {DHP ? (
          <div className="PCM_modal OSM_custom">
            <Button type="primary" onClick={showModalDHP}>
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenDHP}
              onCancel={handleCancelDHP}
              modalHeading={
                "follow these steps for the best possible experience as a customer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/unified_dsep_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    login to the{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      GeneHale
                    </span>{" "}
                    app using the provided:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p>phone number: </p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      7000507343
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p>6 digit OTP:</p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      726345
                    </p>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/DHP_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>From landing page search for specialization of doctor</p>
                    <p>
                      e.g. :{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder text>"}
                      </span>
                    </p>
                  </p>

                  <p>
                    select the following doctor:
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<doctor name>"}
                    </span>{" "}
                    from the search results and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      book appointment.
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/DHP_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>
                    on booking appointment screen{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      select a date and time slot
                    </span>
                  </p>
                  <p>
                    Click{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Confirm booking
                    </span>{" "}
                    to proceed
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/DHP_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>billing & checkout details:</p>
                    <p>
                      Name:
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {" <placeholder>"}
                      </span>
                    </p>
                    <p>
                      Address:
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder long text format>"}
                      </span>
                    </p>
                    <p>
                      Phone Number:
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder>"}
                      </span>
                    </p>
                    <p>
                      Email ID:
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder text>"}
                      </span>
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Click{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘save billing details’
                    </span>
                  </p>
                  <p>and click on </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    proceed to payment
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/DHP_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    select payment method as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘cash on arrival’
                    </span>{" "}
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘continue’
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/DHP_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    Your doctor would have provided a prescription on your last
                    appointment.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    You can see that by going to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘My Appointments’
                    </span>{" "}
                    and then click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘view prescriptions’
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 7
                </h3>
                <img src={"/assets/DHP_step7.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>select the diagnostic lab </p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<placeholder text>"}
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    on booking appointment screen{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      select a date and time slot{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    Click{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Confirm booking
                    </span>{" "}
                    to proceed
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 8
                </h3>
                <img src={"/assets/DHP_step8.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter billing details:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p>
                      Name:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placholder>"}
                      </span>
                    </p>
                    <p>
                      Address:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {" <long placholder text format for address>"}
                      </span>
                    </p>
                    <p>
                      Phone:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder>"}
                      </span>
                    </p>
                    <p>
                      Email ID:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder>"}
                      </span>
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click Save billing details
                  </p>
                  <p>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      continue
                    </span>{" "}
                    to proceed to payment
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 9
                </h3>
                <img src={"/assets/DHP_step9.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>Select payment method as</p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      cash on delivery
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      confirm order
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    on confirmation page click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      view order details
                    </span>{" "}
                    to check order details and fulfilments status of your order.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 10
                </h3>
                <img src={"/assets/DHP_step10.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    Your doctor would have also recommended you to get some
                    tests done
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    You can see that by going to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘My Appointments’
                    </span>{" "}
                    and then click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<test name>"}
                    </span>{" "}
                    and continue to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘search for labs’
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 11
                </h3>
                <img src={"/assets/DHP_step11.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>
                      on booking appointment screen{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        select a date and time slot{" "}
                      </span>
                    </p>
                    <p>
                      Click{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        Confirm booking
                      </span>{" "}
                      to proceed
                    </p>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 12
                </h3>
                <img src={"/assets/DHP_step12.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter billing details:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p>
                      Name:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placholder>"}
                      </span>
                    </p>
                    <p>
                      Address:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {" <long placholder text format for address>"}
                      </span>
                    </p>
                    <p>
                      Phone:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder>"}
                      </span>
                    </p>
                    <p>
                      Email ID:{" "}
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        {"<placeholder>"}
                      </span>
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click Save billing details
                  </p>
                  <p>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      continue
                    </span>{" "}
                    to proceed to payment
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 13
                </h3>
                <img src={"/assets/DHP_step13.svg"} alt={`StepImage`} />

                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <p>Select payment method as</p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      cash on arrival
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      confirm order
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    on confirmation page click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      view order details
                    </span>{" "}
                    to check order details
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}
        {cityOfAfrica ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalCityOfAfrica}
              style={{ left: "unset", margin: "unset", marginTop: "30px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenCityOfAfrica}
              onCancel={handleCancelCityOfAfrica}
              modalHeading={
                "follow these steps for the best possible experience as a customer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/gambia_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    open{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Travel buddy
                    </span>{" "}
                    app ,
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    your pickup location will be your current location{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Serekunda Market
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    select your drop off location as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Banjul International Airport
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      search rides
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/driver_step1_img.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    select rides offered by{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “best taxi”
                    </span>{" "}
                    and proceed,
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ride now to
                    </span>{" "}
                    enter{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “your name”
                    </span>{" "}
                    &
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      mobile number”
                    </span>{" "}
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    then click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “confirm & proceed”
                    </span>{" "}
                    to confirm your order.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/driver_step5_img.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    select payment method as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “cash”
                    </span>{" "}
                    and click on book now
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    your ride is now confirmed
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    now you will be able to see driver details along with
                    vehicle registration number, make and model of car.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/gambia_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on the{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      driver name
                    </span>{" "}
                    to view call and contact support options.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    also, you will be able to see{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      cancel ride
                    </span>{" "}
                    option
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/gambia_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on the{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      cancel ride
                    </span>{" "}
                    to cancel ongoing ride, and select your reason form the list
                    for the cancellation.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    then click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      cancel ride
                    </span>{" "}
                    option
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    you will get an confirmation that your booking has been
                    cancelled, click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      okay
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/gambia_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    on click of ok, you will be presented with two options,{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      go back home
                    </span>{" "}
                    and
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      continue ride
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on any option of your choice to end the flow.
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}
        {himalayas ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalhimalayas}
              style={{ left: "unset", margin: "unset", marginTop: "30px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenhimalayas}
              onCancel={handleCancelhimalayas}
              modalHeading={
                "follow these steps for the best possible experience as a traveller!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/himalayas_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    open app , search for{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘manali’.
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    from search results select:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      hampta pass trek
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    view trip details and click{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘book now’
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    set no. of traveler’s to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      2
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    continue to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      checkout
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/himalayas_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter traveller details:
                  </p>
                  <p>
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Lisa
                    </span>
                  </p>
                  <p>
                    mobile:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      9811259151
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      lisa.k@gmail.com
                    </span>
                  </p>
                  <p>
                    zip code:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      560078
                    </span>
                  </p>
                  <p>
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      1202 B2, Bengaluru Urban, Bengaluru, Karnataka
                    </span>
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    click{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “proceed to pay”{" "}
                    </span>
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/UEI_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “view booking”
                    </span>{" "}
                    button to view booking details
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      scan qr code
                    </span>{" "}
                    to import your order into retail application.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    retail app will ask if you want travel-based shopping list.
                    confirm this action.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/himalayas_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>
                    using generative AI app will create a shopping list for your
                    booked travel.
                  </p>
                  <p>select :</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    sunglasses,
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                      paddingBottom: "10px",
                    }}
                  >
                    {" "}
                    backpack{" "}
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    select a delivery location, based on which a catalog page
                    will be generated
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      view & billing
                    </span>{" "}
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/himalayas_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    enter shipping details:
                  </p>
                  <p>
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Lisa
                    </span>
                  </p>
                  <p>
                    mobile:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      9811259151
                    </span>
                  </p>
                  <p>
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      lisa.k@gmail.com
                    </span>
                  </p>
                  <p>
                    zip code:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      560078
                    </span>
                  </p>
                  <p>
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      1202 B2, Bengaluru Urban, Bengaluru, Karnataka
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/driver_step5_img.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “confirm”
                    </span>{" "}
                    and select payment mode as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “cash on delivery” .
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    you can see your order details on click of{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      view order
                    </span>
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}
        {cities ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalcities}
              style={{ left: "unset", margin: "unset", marginTop: "30px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpencities}
              onCancel={handleCancelcities}
              modalHeading={
                "follow these steps for the best possible experience as a traveller!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/himalayas_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    open{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      travel buddy{" "}
                    </span>
                    app ,
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    your pickup location will be your current location{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      conrad hotel, bengaluru
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    select your drop off location as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      kempegowda international airport, karnataka
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>and search for rides</p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/cities_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    alert message for violation of policy:
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “ok, i understand”{" "}
                    </span>
                    to continue.
                  </p>
                  <p>go back and set your drop off location as:</p>
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    byappanahalli
                  </p>
                  <p>and now search for rides</p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/cities_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    select rides offered by{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “best taxi”{" "}
                    </span>
                    and proceed,
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    enter
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      your name{" "}
                    </span>
                    &{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      mobile number{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    then click on
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      “confirm & proceed”{" "}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/cities_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    select payment mode as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      cash .
                    </span>
                  </p>
                  <p>click on</p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      book now{" "}
                    </span>
                    to proceed.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/cities_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    wait while driver accepts your ride.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    driver will accept your ride request.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/cities_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      pay driver by cash
                    </span>{" "}
                    at the end of the ride
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      rate{" "}
                    </span>
                    the ride experience and provide feedback!
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}
        {isIndustry ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalisIndustry}
              style={{ left: "unset", margin: "unset", marginTop: "30px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenisIndustry}
              onCancel={handleCancelisIndustry}
              modalHeading={
                "follow these steps for the best possible experience as a customer!"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/industry_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    sign in to the{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      suppliflow{" "}
                    </span>
                    app using the provided:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      email address:{" "}
                    </p>
                    <p>{"<enterthefuture01@gmail.com>"}</p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    password:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<Test@1234567>"}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/industry_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    set your location to{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<location name>"}{" "}
                    </span>
                    and
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    search for{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      assembly{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    and select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"<manufacturer name>"}{" "}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/industry_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “book”{" "}
                    </span>
                    button to add assembly details ,
                  </p>
                  <p>enter following details:</p>

                  <p>
                    select type:
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      {" < type >"}{" "}
                    </span>
                  </p>
                  <p>
                    enter colour:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< colour >"}{" "}
                    </span>
                  </p>
                  <p>
                    enter length (in mm): <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< length >"}{" "}
                    </span>
                  </p>
                  <p>
                    enter width (in mm): <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" < width >"}{" "}
                    </span>
                  </p>
                  <p>
                    enter colour:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< colour >"}{" "}
                    </span>
                  </p>
                  <p>
                    enter quantity:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< quantity >"}{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    enter weight ( in Kgs): <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< weight >"}{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “add shipping details”{" "}
                    </span>
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/industry_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p>enter following details as shipping details:</p>

                  <p>
                    name:
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" "}
                      {" < username >"}{" "}
                    </span>
                  </p>
                  <p>
                    mobile:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< 9191223433 >"}{" "}
                    </span>
                  </p>
                  <p>
                    pin code:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {"< 560078 >"}{" "}
                    </span>
                  </p>
                  <p>
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {
                        " <Bengaluru, Bengaluru Urban, Bangalore Division, Karnataka>"
                      }{" "}
                    </span>
                  </p>
                  <p>
                    building name & floor: <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                        textTransform: "capitalize",
                      }}
                    >
                      {" <B2 1202>"}{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    landmark:{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      {" <xavier school>"}{" "}
                    </span>
                  </p>

                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “proceed”{" "}
                    </span>
                    and select payment mode as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “cash on delivery” .{" "}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/industry_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      view details{" "}
                    </span>
                    to view & track order details
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    on the 3-dot menu on homepage you can:
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    check{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      order history{" "}
                    </span>
                    &{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      invoice details
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      scan QR code{" "}
                    </span>
                    to export your order into other apps.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    or select on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      “help and support”{" "}
                    </span>
                    option to get the support related to your order via chatbot.
                  </p>
                </div>
              </>
            </ModalSlider>
          </div>
        ) : null}
        {ODR ? (
          <div className="DSEP-intruction">
            <Button
              type="primary"
              onClick={showModalisODR}
              style={{ left: "unset", margin: "unset", marginTop: "30px" }}
            >
              instructions
              <img
                style={{ paddingLeft: "5px" }}
                src="/assets/arrow_back.svg"
              />
            </Button>
            <ModalSlider
              open={isModalOpenisODR}
              onCancel={handleCancelisODR}
              modalHeading={
                "follow these steps for the best possible experience for discovering legal services online"
              }
            >
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 1
                </h3>
                <img src={"/assets/ODR_step1.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    sign in to the{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      LegalEase{" "}
                    </span>
                    app using the provided:
                  </p>
                  <p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      email address:{" "}
                    </p>
                    <p>santosh@gmail.com</p>
                  </p>
                  <p
                    style={{
                      paddingBottom: "20px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    password:{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      Test@12345
                    </span>
                  </p>
                  <p
                    style={{
                      paddingBottom: "20px",
                    }}
                  >
                    or
                  </p>
                  <p>sign up using below details:</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      Suraj
                    </span>
                  </p>

                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    email address:{" "}
                  </p>
                  <p>suraj@gmail.com</p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    password:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                        textTransform: "capitalize",
                      }}
                    >
                      Test@12345
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 2
                </h3>
                <img src={"/assets/ODR_step2.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    on landing screen select category as{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Family Disputes{" "}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    enter{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Mediation’{" "}
                    </span>
                    in search box and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Search’{" "}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 3
                </h3>
                <img src={"/assets/ODR_step3.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    from the results select{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Mediation Service’{" "}
                    </span>
                    as your service provider.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    on the details screen click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Proceed’{" "}
                    </span>
                    button to add details related to your dispute.
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 4
                </h3>
                <img src={"/assets/ODR_step4.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Add Complainant Details’{" "}
                    </span>
                    to add complainant and billing details:
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      Marie Sampath
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    mobile number:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      9876543210
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      marie.sampath@gmail.com
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {"343, B Block, Sector 4, Rohini, Delhi "}
                    </span>
                  </p>
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    zipcode:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {"110042"}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Save{" "}
                    </span>
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 5
                </h3>
                <img src={"/assets/ODR_step5.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Add Respondent Details’{" "}
                    </span>
                    to add respondent details:
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    name:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      Jay D
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    mobile number:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      9871432309
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    email id:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      jay.d@gmail.com
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    address:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {"23, East end , sector 10, Pritampura, Delhi"}
                    </span>
                  </p>
                  <p
                    style={{
                      paddingBottom: "10px",
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    zipcode:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {"110034"}
                    </span>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Save{" "}
                    </span>
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 6
                </h3>
                <img src={"/assets/ODR_step6.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Add Dispute Details’{" "}
                    </span>
                    to add dispute related details and documents:
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    dispute details:{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {"<enter dispute details in brief>"}
                    </span>
                  </p>
                  <p
                    style={{
                      fontWeight: "bolder",
                      color: "#000",
                    }}
                  >
                    claim value(optional):{" "}
                    <span
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {"<claim value>"}
                    </span>
                  </p>

                  <p style={{ paddingTop: "10px" }}>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Save{" "}
                    </span>
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 7
                </h3>
                <img src={"/assets/ODR_step7.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Fill Consent Form’{" "}
                    </span>
                    to agree to the terms and conditions from service provider
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    <p>enter the following details:</p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      name:{" "}
                      <span
                        style={{
                          fontWeight: "400",
                        }}
                      >
                        Marie
                      </span>
                    </p>
                    <p
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      place:{" "}
                      <span
                        style={{
                          fontWeight: "400",
                        }}
                      >
                        343, B Block, Sector 4, Rohini, Delhi - 110042
                      </span>
                    </p>
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on digital signature checkbox to provide consent
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    and click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Confirm{" "}
                    </span>
                    to continue
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 8
                </h3>
                <img src={"/assets/ODR_step8.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      Confirm{" "}
                    </span>
                    to submit your case details to officially register a case
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 9
                </h3>
                <img src={"/assets/ODR_step9.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    On confirmation screen you will receive Case ID along with
                    case manager details.
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘View Case Details’{" "}
                    </span>
                  </p>
                </div>
              </>
              <>
                <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
                  step 10
                </h3>
                <img src={"/assets/ODR_step10.svg"} alt={`StepImage`} />
                <div className="text_wrapper_modal">
                  <p style={{ paddingBottom: "10px" }}>
                    You will be able to view and track the progress of your
                    case. After dispute is resolved,
                  </p>
                  <p style={{ paddingBottom: "10px" }}>
                    click on{" "}
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#000",
                      }}
                    >
                      ‘Rate us’{" "}
                    </span>
                    to rate the experience
                  </p>
                </div>
              </>
            </ModalSlider>
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
                  <div className="QR_custom PCM_card">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmPcAppUrl || "-"}
                    />
                    <p style={{ textAlign: "center" }}>scan to see how!</p>
                    <Button
                      type="primary"
                      onClick={showModalPC}
                      className="PCM_card_btn"
                    >
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
                  <div className="QR_custom PCM_card">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmDriverUrl || "-"}
                    />
                    <p>scan to see how!</p>
                    <Button
                      type="primary"
                      onClick={showModalDriver}
                      className="PCM_card_btn"
                    >
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
                //@ts-ignore
                ref={iframeRef}
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src={iframeURL}
                frameBorder="0"
                allowFullScreen
                scrolling={
                  DSNP && isDsnpFeed ? "yes" : !OSC && !DSEP ? "no" : "yes"
                }
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
