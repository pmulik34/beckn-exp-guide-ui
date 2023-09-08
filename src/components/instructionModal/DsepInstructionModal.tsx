import React, { useState } from "react";
import InstructionButton from "../instructionButton/InstructionButton";
import ModalHTML from "../ModalHTML/modalHTML";

const DsepInstructionModal = () => {
  const [isModalOpenDSEP, setIsModalOpenDSEP] = useState(false);
  const handleInstructionModal = () => {
    setIsModalOpenDSEP(true);
  };
  const handleCancelDSEP = () => {
    setIsModalOpenDSEP(false);
  };
  return (
    <div style={{ marginTop: "-20px" }}>
      <InstructionButton handleInstructions={handleInstructionModal} />

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
  );
};

export default DsepInstructionModal;
