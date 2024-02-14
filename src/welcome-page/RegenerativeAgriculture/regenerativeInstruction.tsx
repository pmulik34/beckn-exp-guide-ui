import React, { useEffect, useState } from "react";
import ModalSlider from "../../common/ModalHTML/ModalSlider";

interface RegenerativeInstructionProps {
  isModalOpen: boolean;
  setIsModalRegenerativeAgriculture: (isOpen: boolean) => void;
}

const RegenerativeInstruction: React.FC<RegenerativeInstructionProps> = (
  props
) => {
  const [isModalRegenerativeAgriculture, setIsModalRegenerativeAgriculture] =
    useState(false);

  const handleCancelRegenerativeAgriculture = () => {
    props.setIsModalRegenerativeAgriculture(false);
  };

  useEffect(() => {
    if (!props.isModalOpen) {
      setIsModalRegenerativeAgriculture(false);
    }
  }, [props.isModalOpen]);

  return (
    <div>
      <ModalSlider
        open={props.isModalOpen}
        onCancel={handleCancelRegenerativeAgriculture}
        modalHeading={
          "follow these steps for the best possible experience as a customer!"
        }
      >
        <>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 1</h3>
          <img src={"/assets/AR_step1.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              sign in to the{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                agriloop{" "}
              </span>
              app using the provided:
            </p>
            <p
              style={{
                fontWeight: "bolder",
                color: "#000",
              }}
            >
              email address:{" "}
            </p>
            <p
              style={{
                paddingBottom: "10px",
              }}
            >
              {"<johnsmith@gmail.com> "}
            </p>
            <p style={{ paddingBottom: "10px" }}>
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                password:{" "}
              </span>
              {"<Test@1234567>"}
            </p>
          </div>
        </>
        <>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 2</h3>
          <img src={"/assets/AR_step2.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              set your location to{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"<La Grande Blvd, Sacramento> "}
              </span>
            </p>
            <p style={{ paddingBottom: "10px" }}>and</p>
            <p style={{ paddingBottom: "10px" }}>
              search for{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"< item name>"}
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
                {"<item>"}{" "}
              </span>
              sold by{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"<provider name>"}{" "}
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
                “add to cart”{" "}
              </span>
              button & then
            </p>
            <p style={{ paddingBottom: "10px" }}>
              click on{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “proceed to checkout”{" "}
              </span>
              to continue,
            </p>
          </div>
        </>
        <>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 3</h3>
          <img src={"/assets/AR_step3.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              click on{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “add shipping details”
              </span>
            </p>
            <p style={{ paddingBottom: "5px" }}>
              enter following details as shipping details:
            </p>
            <p>
              name:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                john smith
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
                +1 9162228000
              </span>
            </p>
            <p>
              email:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                johnsmith@gmail.com
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
                3523 La Grande Blvd
              </span>
            </p>
            <p>
              city:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                sacramento
              </span>
            </p>
            <p>
              state:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                ca
              </span>
            </p>
            <p>
              country:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                united states
              </span>
            </p>
            <p style={{ paddingBottom: "5px" }}>
              zipcode:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                95823
              </span>
            </p>
            <p>
              click on{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “save shipping details”{" "}
              </span>
              to continue
            </p>
          </div>
        </>
        <>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 4</h3>
          <img src={"/assets/AR_step4.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              click on{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “calculate amount”{" "}
              </span>
              to recompute pricing,
            </p>
            <p style={{ paddingBottom: "10px" }}>
              click on{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “proceed to payment”{" "}
              </span>
              to continue
            </p>
            <p style={{ paddingBottom: "10px" }}>
              select{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “stripe”{" "}
              </span>
              as payment method and
            </p>
            <p style={{ paddingBottom: "10px" }}>
              click on{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                “continue to payment”{" "}
              </span>
              to proceed
            </p>
          </div>
        </>
        <>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>step 5</h3>
          <img src={"/assets/AR_step5.svg"} alt={`StepImage`} />
          <div className="text_wrapper_modal">
            <p style={{ paddingBottom: "10px" }}>
              enter following as payment details:
            </p>

            <p>
              card number:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"<card number>"}
              </span>
            </p>
            <p>
              expiry:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"<expiry date> "}
              </span>
            </p>
            <p>
              cvc:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"< secret number >"}
              </span>
            </p>
            <p>
              country:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"<united states>"}
              </span>
            </p>
            <p style={{ paddingBottom: "10px" }}>
              postcode:{" "}
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                }}
              >
                {"<95823>"}
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
                “pay $1502 ”{" "}
              </span>
              to continue
            </p>
            <p>as soon as payment is complete your order will be confirmed.</p>
          </div>
        </>
      </ModalSlider>
    </div>
  );
};

export default RegenerativeInstruction;
