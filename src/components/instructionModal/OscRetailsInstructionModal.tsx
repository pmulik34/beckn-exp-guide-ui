import React, { useState } from "react";
import InstructionButton from "../instructionButton/InstructionButton";
import ModalHTML from "../ModalHTML/modalHTML";

const OscRetailsInstructionModal = () => {
  const [isModalOpenOSCRetailer, setIsModalOpenOSCRetailer] = useState(false);
  const handleInstructions = () => {
    setIsModalOpenOSCRetailer(true);
  };
  const handleCancelRetailer = () => {
    setIsModalOpenOSCRetailer(false);
  };
  return (
    <div>
      <InstructionButton handleInstructions={handleInstructions} />
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
              <span style={{ fontWeight: "bolder" }}>ClicPaye.</span> This
              application helps manage products and process orders on the
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
              <p style={{ fontWeight: "bolder", color: "#000" }}>Password:</p>
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
              <span style={{ fontWeight: "bolder" }}>ClicPaye</span> gets
              reflected on the
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
    </div>
  );
};

export default OscRetailsInstructionModal;
