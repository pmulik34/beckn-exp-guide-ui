import React, { ReactElement, useEffect } from "react";
import {
  signCiTransaction,
  signPayloadWithExtension,
} from "../../utility/signTransaction";
import { web3Enable, web3Accounts } from "@polkadot/extension-dapp";

import "./tabs.css";
import { JsxElement } from "typescript";
export interface selectExpModalProps {
  headingText?: string;
  btmHeading?: string;
  descriptionText?: string;
  iframeURL?: string | undefined;
  languageEng?: string;
  languageFra?: string;
  setTourismUrl?: Function;
  retailsModal?: boolean;
  pulseEnergy?: string;
  iframeRef?: any;
  appDashboard?: ReactElement;
}
const ChooseRegenAgExp: React.FC<selectExpModalProps> = ({
  iframeURL,
  iframeRef,
  appDashboard,
}: selectExpModalProps) => {
  //   const ONDC = localStorage.getItem("name") === "ONDC";

  useEffect(() => {
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

  return (
    <div className="tab-wrappper-content chooseRegenAgExp_wrapper">
      <div className="smartphone-wrapper">
        <div className="smartphone">
          <div className="content">
            <iframe
              ref={iframeRef}
              className="ChooseExpIframe"
              allow="clipboard-read; clipboard-write; geolocation"
              src={iframeURL}
              frameBorder="0"
              allowFullScreen
              scrolling={"no"}
              width={"100%"}
              height={"100%"}
              style={{ borderRadius: "36px" }}
            />
          </div>
        </div>
      </div>
      <div>{appDashboard}</div>
    </div>
  );
};

export default ChooseRegenAgExp;
