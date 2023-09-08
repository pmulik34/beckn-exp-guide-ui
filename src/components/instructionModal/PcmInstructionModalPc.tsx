import React, { useState } from "react";
import ModalHTML from "../ModalHTML/modalHTML";
import InstructionButton from "../instructionButton/InstructionButton";

const PcmInstructionModalPc = () => {
  const [isModalOpenPC, setIsModalOpenPC] = useState(false);

  const handleInstructionModalPc = () => {
    setIsModalOpenPC(true);
  };

  const handleCancelPC = () => {
    setIsModalOpenPC(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstructionButton handleInstructions={handleInstructionModalPc} />
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
              <span style={{ textTransform: "capitalize" }}>culture</span>
              <br /> app using the provided:
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bolder", color: "#000" }}>
                email address:
              </p>
              <p>enterthefuture01@gmail.com</p>
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bolder", color: "#000" }}>password:</p>
              <p style={{ textTransform: "capitalize" }}>Test@1234567</p>
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
                <span style={{ textTransform: "capitalize" }}>Culture</span>{" "}
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
              from the reservation confirmation page select <br /> the third
              option: <br />{" "}
              <span style={{ fontWeight: "700", color: "#000" }}>
                {""}‘<span style={{ textTransform: "capitalize" }}>Show</span>{" "}
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
            <p style={{ paddingBottom: "10px" }}>ensure that you specify:</p>

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
              sit tight and wait for your <br /> cab to arrive, and you'll be{" "}
              <br /> all set to embark on your <br />
              journey!
            </p>
          </div>
        }
      />
    </div>
  );
};

export default PcmInstructionModalPc;
