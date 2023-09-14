import React, { useState } from "react";
import ModalHTML from "../ModalHTML/modalHTML";
import InstructionButton from "../instructionButton/InstructionButton";

const OscInstructionModal = () => {
  const [isModalOpenOSC, setIsModalOpenOSC] = useState(false);
  const handleInstructionModal = () => {
    setIsModalOpenOSC(true);
  };
  const handleCancelOSC = () => {
    setIsModalOpenOSC(false);
  };
  return (
    <>
      <InstructionButton handleInstructions={handleInstructionModal} />
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
              Sign in to the Open Street Commerce app using the provided:
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bolder", color: "#000" }}>
                phone number:
              </p>
              <p> 5678990532</p>
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <p style={{ fontWeight: "bolder", color: "#000" }}>
                6 digit <span style={{ textTransform: "uppercase" }}>OTP</span>
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
              <p style={{ fontWeight: "bolder", color: "#000" }}>Name:</p>
              <p>Lisa</p>
            </p>
            <p>
              <p style={{ fontWeight: "bolder", color: "#000" }}>Address:</p>
              <p>quai jacqus, paris, france</p>
            </p>
            <p>
              <p style={{ fontWeight: "bolder", color: "#000" }}>
                Phone Number:
              </p>
              <p>5678990532</p>
            </p>
            <p>
              <p style={{ fontWeight: "bolder", color: "#000" }}>Email ID:</p>
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
              <span style={{ textTransform: "capitalize" }}> Once</span> the
              order is placed, you can track your order!
            </p>
          </div>
        }
      />
    </>
  );
};

export default OscInstructionModal;
