import { Modal } from "antd";
import React from "react";
import "./modalHTML.css";

export interface ModalHTMLProps {
  modalHeading?: string;
  step1?: string;
  step2?: string;
  step3?: string;
  step4?: string;
  step5?: string;
  step1Img?: string;
  step2Img?: string;
  step3Img?: string;
  step4Img?: string;
  step5Img?: string;
  step1Text?: string | any;
  step2Text?: string | any;
  step3Text?: string | any;
  step4Text?: string | any;
  step5Text?: string | any;
  open: any;
  onCancel: any;
  className1?: string;
  classNameWidth?: string;
}

const ModalHTML: React.FC<ModalHTMLProps> = (props) => {
  return (
    <Modal
      className={`${props.classNameWidth} PCM_modal`}
      title={props.modalHeading}
      open={props.open}
      onCancel={props.onCancel}
    >
      <div className="modal_inner_wrapper">
        <div className="steps_container">
          <div
            style={{
              textAlign: "center",
              fontSize: "17px",
              fontWeight: "700",
              paddingBottom: "15px",
            }}
          >
            {props.step1}
          </div>
          <div className="steps">
            <img src={props.step1Img} />
          </div>
          <div
            style={{
              height: "unset",
              width: "198px",
              borderRadius: "5px",
              padding: "20px 0px",
            }}
          >
            {props.step1Text}
          </div>
        </div>
        <div className="steps_container">
          <div
            style={{
              textAlign: "center",
              fontSize: "17px",
              fontWeight: "700",
              paddingBottom: "15px",
            }}
          >
            {props.step2}
          </div>
          <div className="steps">
            <img src={props.step2Img} />
          </div>
          <div
            style={{
              height: "unset",
              width: "198px",
              borderRadius: "5px",
              padding: "20px 0px",
            }}
          >
            {props.step2Text}
          </div>
        </div>
        <div className="steps_container">
          <div
            style={{
              textAlign: "center",
              fontSize: "17px",
              fontWeight: "700",
              paddingBottom: "15px",
            }}
          >
            {props.step3}
          </div>
          <div className="steps">
            <img src={props.step3Img} />
          </div>
          <div
            style={{
              height: "unset",
              width: "198px",
              borderRadius: "5px",
              padding: "20px 0px",
            }}
          >
            {props.step3Text}
          </div>
        </div>
        <div className={`${props.className1} steps_container`}>
          <div
            style={{
              textAlign: "center",
              fontSize: "17px",
              fontWeight: "700",
              paddingBottom: "15px",
            }}
          >
            {props.step4}
          </div>
          <div className="steps">
            <img src={props.step4Img} />
          </div>
          <div
            style={{
              height: "unset",
              width: "198px",
              borderRadius: "5px",
              padding: "20px 0px",
            }}
          >
            {props.step4Text}
          </div>
        </div>
        <div className={`${props.className1} steps_container`}>
          <div
            style={{
              textAlign: "center",
              fontSize: "17px",
              fontWeight: "700",
              paddingBottom: "15px",
            }}
          >
            {props.step5}
          </div>
          <div className="steps">
            <img src={props.step5Img} />
          </div>
          <div
            style={{
              height: "unset",
              width: "198px",
              borderRadius: "5px",
              padding: "20px 0px",
            }}
          >
            {props.step5Text}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalHTML;
