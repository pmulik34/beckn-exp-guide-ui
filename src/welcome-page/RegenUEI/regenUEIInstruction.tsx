import React from "react";
import ModalSlider from "../../common/ModalHTML/ModalSlider";

interface RegenUEIInstructionProps {
  isUEIInstructionModalOpen: boolean;
  setIsModalRegenUEIInstruction: (isOpen: boolean) => void;
}

const RegenUEIInstruction: React.FC<RegenUEIInstructionProps> = (props) => {
  const handleCancelRegenUEIInstruction = () => {
    props.setIsModalRegenUEIInstruction(false);
  };

  return (
    <div>
      <ModalSlider
        open={props.isUEIInstructionModalOpen}
        onCancel={handleCancelRegenUEIInstruction}
        modalHeading={
          "follow these steps for the best possible experience for Unified energy Interface"
        }
      >
        <>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 1</h3>
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 2</h3>
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 3</h3>
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 4</h3>
          <img src={"/assets/UEI_step4.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>You will see 2 options:</p>

            <p style={{ paddingBottom: "10px" }}>1) ₹15/Unit (Bescom) and</p>
            <p style={{ paddingBottom: "10px" }}>2) ₹13/Unit (UEI) option.</p>

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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 5</h3>
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 6</h3>
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
              A list of available demand notes will be displayed. select one
              option and{" "}
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 7</h3>
          <img src={"/assets/UEI_step7.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              next,{" "}
              <span style={{ fontWeight: "bolder", color: "#000" }}>click</span>{" "}
              ‘Check Suppliers’.
            </p>

            <p
              style={{
                paddingBottom: "10px",
              }}
            >
              Turno, the green energy supplier, will show the list of energy
              available.
            </p>
            <p
              style={{
                paddingBottom: "10px",
              }}
            >
              Select one and{" "}
              <span style={{ fontWeight: "bolder", color: "#000" }}>click</span>{" "}
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 8</h3>
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
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 9</h3>
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
              ‘Push to Grid’ is Sheru's readiness to feed green energy from
              Turno into the grid.
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
              access your ‘order history’ page in the Sheru app from the 3-dot
              menu on the Home Page.
            </p>
            <p style={{ paddingBottom: "10px" }}>
              screen will provide detailed description of cash outflow of demand
              notes, suppy and earnings
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
          <img src={"/assets/regenUEI_step11.svg"} alt={`StepImage`} />

          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              You'll see the details of energy suppliers like Turno, the green
              energy producer that fulfills demands for companies like Sheru
              after storing it in batteries.
            </p>
            <p>details include: battery id, </p>
            <p style={{ paddingBottom: "10px" }}>
              capacity of units it can fulfill, and price.
            </p>
          </div>
        </>
      </ModalSlider>
    </div>
  );
};

export default RegenUEIInstruction;
