import React, { FC, useState } from "react";
import Modal from "../../welcome-page/modal";
import OscInstructionModal from "../instructionModal/OscInstructionModal";
import "./Iframe.css";

export interface IframeProps {
  IframeURL?: string | any;
  scrolling: string;
  heading1: string;
  heading2: string;
  heading3: string;
  description_text: string;
  english?: string;
  france?: string;
  activeEn?: string;
  activeFa?: string;
  handleLanguageEn?: () => void;
  handleLanguageFa?: () => void;
  instructionModal?: JSX.Element;
}

const IframeEn: FC<IframeProps> = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="iframe_wrapper">
        <div className="text_wrapper">
          <div>
            <p className="heading1">{props.heading1}</p>
            <img className="heading2" src={props.heading2} />
            <p className="heading3">{props.heading3}</p>
            <p className="description_text">{props.description_text}</p>
          </div>
          <div className="languages_tab">
            <div
              className={`english ${props.activeEn}`}
              onClick={props.handleLanguageEn}
            >
              {props.english}
            </div>
            {props.english ? <div>|</div> : ""}
            <div
              className={`france ${props.activeFa}`}
              onClick={props.handleLanguageFa}
            >
              {props.france}
            </div>
          </div>
          {props.instructionModal}
        </div>
        <div className="smartphone-wrapper">
          <div className="smartphone">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src={props.IframeURL}
                frameBorder="0"
                allowFullScreen
                scrolling={props.scrolling}
                // scrolling={!OSC && !DSEP ? "no" : "yes"}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="exit-icon">
        {!openModal ? (
          <img
            onClick={() => setOpenModal(true)}
            src="/assets/curvedArrow.svg"
            alt="curvedArrow"
          />
        ) : (
          <Modal flag={openModal} pathName={"/ThankYou"} />
        )}
      </div>
    </>
  );
};

export default IframeEn;
