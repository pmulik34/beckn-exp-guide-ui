import React, { useState } from "react";
import ModalHTML from "../ModalHTML/modalHTML";
import InstructionButton from "../instructionButton/InstructionButton";

const PcmInstructionModalDriver = () => {
  const [isModalOpenDriver, setSsModalOpenDriver] = useState(false);
  const handleInstructionModalDriver = () => {
    setSsModalOpenDriver(true);
  };
  const handleCancelDriver = () => {
    setSsModalOpenDriver(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstructionButton handleInstructions={handleInstructionModalDriver} />
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
              sign in as a ‘driver’ using <br /> the following information:
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bolder", color: "#000" }}>
                phone number
              </p>
              <p> 9493143166</p>
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bolder", color: "#000" }}>
                4 digit <span style={{ textTransform: "uppercase" }}>OTP</span>
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
                <span style={{ textTransform: "capitalize" }}>Culture</span>
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
            <p style={{ paddingBottom: "10px" }}>accept the ride!</p>
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
              payment will be completed by customer after the ride!
            </p>
          </div>
        }
      />
    </div>
  );
};

export default PcmInstructionModalDriver;
