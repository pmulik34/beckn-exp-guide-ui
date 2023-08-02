import { QRCode, Button, Modal, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalHTML from "../ModalHTML/modalHTML";
import { selectExpModalProps } from "./chooseExperience";
import TabsFa from "./tabsFa";

const ChooseExpFa: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
  languageEng,
  languageFra,
  setTourismUrl,
  retailsModal,
}: selectExpModalProps) => {
  const pcmDriverUrl = process.env.REACT_APP_PCM_DRIVER_URL;
  const pcmPcAppUrl = process.env.REACT_APP_PCM_PC_APP_URL;
  const cityOfLightFaUrl = process.env.REACT_APP_CITY_OF_LIGHT_FRENCH_URL;

  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const OSC = localStorage.getItem("name") === "OSC";
  const PCM = localStorage.getItem("name") === "PCM";
  const navigate = useNavigate();

  const [lang, setLang] = useState("français");
  const [isModalOpenOSC, setIsModalOpenOSC] = useState(false);
  const [isModalOpenPC, setIsModalOpenPC] = useState(false);
  const [isModalOpenDriver, setSsModalOpenDriver] = useState(false);
  const [isModalOpenOSCRetailer, setIsModalOpenOSCRetailer] = useState(false);

  const showModalPC = () => {
    setIsModalOpenPC(true);
  };
  const showModalDriver = () => {
    setSsModalOpenDriver(true);
  };
  const showModalOSC = () => {
    setIsModalOpenOSC(true);
  };
  const showModalOSCretailer = () => {
    setIsModalOpenOSCRetailer(true);
  };

  const handleCancelPC = () => {
    setIsModalOpenPC(false);
  };
  const handleCancelDriver = () => {
    setSsModalOpenDriver(false);
  };
  const handleCancelOSC = () => {
    setIsModalOpenOSC(false);
  };
  const handleCancelRetailer = () => {
    setIsModalOpenOSCRetailer(false);
  };

  return (
    <div
      className={
        PCM ? "tab-wrappper-content PCM_details" : "tab-wrappper-content"
      }
    >
      <div>
        <img src={textURL} alt="header-content-text" />

        {!cityOfAfrica ? (
          <div
            style={{
              padding: "10px 0",
              fontSize: "16px",
            }}
          >
            <span
              onClick={(e: any) => {
                setTourismUrl!(`${OSC ? navigate("/OSC") : navigate("/PCM")}`);
              }}
              style={{
                paddingRight: "8px",
                cursor: "pointer",
                fontWeight: `${lang === "français" ? "300" : "unset"}`,
              }}
            >
              {languageEng}
            </span>
            |
            <span
              style={{
                paddingLeft: "8px",
                fontWeight: `${lang === "français" ? "unset" : "300"}`,
                cursor: "pointer",
              }}
              onClick={(e: any) => {
                setTourismUrl!(`${OSC ? "" : ""}`);
              }}
            >
              {!PCM && !OSC ? (
                <a
                  style={{ color: "#000" }}
                  href={cityOfLightFaUrl}
                  target="_self"
                  rel="noreferrer"
                >
                  {languageFra}
                </a>
              ) : (
                `${languageFra}`
              )}
            </span>
          </div>
        ) : null}
        {OSC ? (
          <div className="PCM_modal OSM_custom">
            {!retailsModal ? (
              <>
                <Button type="primary" onClick={showModalOSC}>
                  mode d'emploi
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <ModalHTML
                  open={isModalOpenOSC}
                  onCancel={handleCancelOSC}
                  modalHeading={
                    "suivez ces étapes pour que votre expérience en tant que client soit la meilleure possible !"
                  }
                  step1={"Étape 1"}
                  step1Img={"/assets/OSM_step1_img.svg"}
                  step1Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Connectez-vous à l'application Open Street Commerce à
                        l'aide de l'identifiant fourni :
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          numéro de téléphone:
                        </p>
                        <p> 5678990532</p>
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          <span style={{ textTransform: "uppercase" }}>
                            OTP
                          </span>{" "}
                          à 6 chiffres
                        </p>
                        <p> 456012</p>
                      </p>
                    </div>
                  }
                  step2={"Étape 2"}
                  step2Img={"/assets/OSM_step2_img.svg"}
                  step2Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Dans la vue de la carte
                      </p>
                      <p
                        style={{
                          fontWeight: "bolder",
                          color: "#000",
                        }}
                      >
                        sélectionnez l'emplacement:
                      </p>
                      <p
                        style={{
                          paddingBottom: "10px",
                        }}
                      >
                        {" <location name>"}
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          sélectionnez l'option:
                        </p>
                        <p>‘Restaurant’</p>
                      </p>
                      <p style={{}}>
                        <p>
                          {" "}
                          <span style={{ textTransform: "capitalize" }}>
                            Sélectionner
                          </span>{" "}
                          le restaurant
                        </p>
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
                          Cliquez sur{" "}
                          <span
                            style={{
                              fontWeight: "bolder",
                              color: "#000",
                              textTransform: "capitalize",
                            }}
                          >
                            'Acheter'
                          </span>
                        </p>
                      </p>
                    </div>
                  }
                  step3={"Étape 3"}
                  step3Img={"/assets/OSM_step3-img.svg"}
                  step3Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Commandez un cheesecake pour vous-même :)
                      </p>
                      <p style={{ paddingBottom: "10px" }}>
                        Vous avez le choix entre plusieurs services de <br />
                        livraison !
                      </p>
                    </div>
                  }
                  step4={"Étape 4"}
                  step4Img={"/assets/OSM_step4_img.svg"}
                  step4Text={
                    <div className="text_wrapper_modal">
                      <p>
                        Informations dont vous pourriez avoir besoin pour passer
                        votre commande
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Nom:
                        </p>
                        <p>Lisa</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Adresse:
                        </p>
                        <p>{"<lonnng address of Paris>"}</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Numéro de téléphone:
                        </p>
                        <p>5678990532</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Adresse électronique:
                        </p>
                        <p>lisa@email.com</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          Mode de paiement:
                        </p>
                        <p>Paiement à la livraison</p>
                      </p>
                    </div>
                  }
                  step5={"Étape 5"}
                  step5Img={"/assets/OSM_step5_img.svg"}
                  step5Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        <span style={{ textTransform: "capitalize" }}>Une</span>{" "}
                        fois la commande passée, vous pouvez la suivre!
                      </p>
                    </div>
                  }
                />
              </>
            ) : (
              <>
                <Button type="primary" onClick={showModalOSCretailer}>
                  mode d'emploi
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <ModalHTML
                  className1="none"
                  classNameWidth={"modal_width"}
                  open={isModalOpenOSCRetailer}
                  onCancel={handleCancelRetailer}
                  modalHeading={
                    "suivez ces étapes pour une expérience optimale en tant que vendeur!"
                  }
                  step1={"Étape 1"}
                  step1Img={"/assets/OSM_step1_img.svg"}
                  step1Text={
                    <div className="text_wrapper_modal">
                      <p>
                        Vous êtes sur le point de vous connecter en tant que
                        'vendeur' pour ClicPaye. Cette application permet de
                        gérer les produits et de traiter les commandes sur le{" "}
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          ‘Open Street Commerce’
                        </p>
                      </p>
                      <p>
                        <p>détails de connexion:</p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          numéro de téléphone::
                        </p>
                        <p> 9876543210</p>
                      </p>
                      <p>
                        <p style={{ fontWeight: "bolder", color: "#000" }}>
                          mot de passe:
                        </p>
                        <p> 234567</p>
                      </p>
                    </div>
                  }
                  step2={"Étape 2"}
                  step2Img={"/assets/BPP_step2_img.svg"}
                  step2Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Voici quelques exemples de ce que vous pouvez faire sur
                        {""}
                        <span style={{ fontWeight: "bolder", color: "#000" }}>
                          {""} ClicPaye:
                        </span>{" "}
                      </p>

                      <ul>
                        <li>
                          Voir/gérer les commandes passées dans votre magasin
                        </li>
                        <li>Voir tous les produits de votre magasin</li>
                        <li>Gérer tous les produits de votre boutique</li>
                      </ul>
                    </div>
                  }
                  step3={"Étape 3"}
                  step3Img={"/assets/BPP_step3_img.svg"}
                  step3Text={
                    <div className="text_wrapper_modal">
                      <p style={{ paddingBottom: "10px" }}>
                        Les activités que vous effectuez sur ClicPaye se
                        reflètent sur l'application <br />
                        <span style={{ fontWeight: "bolder" }}>
                          ‘Open Street Commerce’{" "}
                        </span>
                      </p>
                    </div>
                  }
                />
              </>
            )}
          </div>
        ) : null}
      </div>

      {PCM ? (
        <div className="QR-wrapper">
          <Tabs
            className={"QR_Innr"}
            defaultActiveKey="1"
            items={[
              {
                label: (
                  <div>
                    <span style={{ color: "#696868", wordBreak: "break-word" }}>
                      pass Culture
                    </span>
                  </div>
                ),
                key: "1",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmPcAppUrl || "-"}
                    />
                    <p>
                      scannez pour voir <br /> comment!{" "}
                    </p>
                    <Button type="primary" onClick={showModalPC}>
                      mode d'emploi
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <ModalHTML
                      open={isModalOpenPC}
                      onCancel={handleCancelPC}
                      modalHeading={
                        "suivez ces étapes pour que votre expérience en tant que passager soit la meilleure possible !"
                      }
                      step1={"Étape 1"}
                      step1Img={"/assets/PC_step1_img.svg"}
                      step1Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            <span style={{ textTransform: "capitalize" }}>
                              Connectez-vous
                            </span>{" "}
                            à l'application Pass Culture en utilisant l'adresse
                            fournie:
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              adresse email:
                            </p>
                            <p> enterthefuture01@gmail.com</p>
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              mot de passe:
                            </p>
                            <p style={{ textTransform: "capitalize" }}>
                              Test@1234567
                            </p>
                          </p>
                        </div>
                      }
                      step2={"Étape 2"}
                      step2Img={"/assets/PC_step2_img.svg"}
                      step2Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            en utilisant l'application{" "}
                            <span style={{ fontWeight: "700", color: "#000" }}>
                              pass culture{" "}
                            </span>
                            rechercher un événement et le réserver
                          </p>
                        </div>
                      }
                      step3={"Étape 3"}
                      step3Img={"/assets/PC_step3_img.svg"}
                      step3Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            sur la page de confirmation de la réservation,
                            sélectionnez la troisième option:{" "}
                            <span style={{ fontWeight: "700", color: "#000" }}>
                              {" "}
                              <br />
                              ‘'{" "}
                              <span style={{ textTransform: "capitalize" }}>
                                Afficher
                              </span>{" "}
                              les options de voyage'’
                            </span>{" "}
                            <br />
                            et sélectionnez 'taxi'
                          </p>
                        </div>
                      }
                      step4={"Étape 4"}
                      step4Img={"/assets/PC_step4_img.svg"}
                      step4Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            veillez à préciser
                          </p>

                          <p style={{ fontWeight: "700", color: "#000" }}>
                            le lieu de prise en charge :
                          </p>
                          <p>quai jacques chirac, 75007 paris, france</p>

                          <p
                            style={{
                              fontWeight: "700",
                              paddingTop: "15px",
                              color: "#000",
                            }}
                          >
                            le lieu de dépôt :
                          </p>
                          <p>l'application viendra chercher à cet endroit. </p>
                        </div>
                      }
                      step5={"Étape 5"}
                      step5Img={"/assets/PC_step5_img.svg"}
                      step5Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            attendez tranquillement l'arrivée de votre taxi, et
                            vous serez prêt à partir en voyage!
                          </p>
                        </div>
                      }
                    />
                  </div>
                ),
              },
              {
                label: (
                  <div className="" style={{ display: "flex" }}>
                    <div>
                      <span style={{ color: "#696868" }}>alliance taxi</span>
                    </div>
                  </div>
                ),
                key: "2",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmDriverUrl || "-"}
                    />
                    <p>
                      scannez pour voir <br /> comment!{" "}
                    </p>
                    <Button type="primary" onClick={showModalDriver}>
                      mode d'emploi
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <ModalHTML
                      open={isModalOpenDriver}
                      onCancel={handleCancelDriver}
                      modalHeading={
                        "suivez ces étapes pour que votre expérience de conducteur soit la meilleure possible !"
                      }
                      step1={"Étape 1"}
                      step1Img={"/assets/driver_step1_img.svg"}
                      step1Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            <span style={{ textTransform: "capitalize" }}>
                              Connectez-vous
                            </span>{" "}
                            en tant que "conducteur" en utilisant les
                            informations suivantes:
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              numéro de téléphone
                            </p>
                            <p> 9493143166</p>
                          </p>
                          <p style={{ paddingBottom: "10px" }}>
                            <p style={{ fontWeight: "bolder", color: "#000" }}>
                              <span style={{ textTransform: "uppercase" }}>
                                OTP
                              </span>{" "}
                              à 4 chiffres
                            </p>
                            <p> 7891</p>
                          </p>
                        </div>
                      }
                      step2={"Étape 2"}
                      step2Img={"/assets/driver_step2_img.svg"}
                      step2Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            La demande de trajet doit être déclenchée depuis
                            l'application{" "}
                            <span style={{ fontWeight: "700", color: "#000" }}>
                              pass culture{" "}
                            </span>
                            et le bouton bascule doit être activé pour recevoir
                            de nouvelles demandes de trajet.
                          </p>
                        </div>
                      }
                      step3={"Étape 3"}
                      step3Img={"/assets/driver_step3_img.svg"}
                      step3Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            <span style={{ textTransform: "capitalize" }}>
                              Accepter
                            </span>{" "}
                            le trajet
                          </p>
                        </div>
                      }
                      step4={"Étape 4"}
                      step4Img={"/assets/driver_step4_img.svg"}
                      step4Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            entrez l{" "}
                            <span
                              style={{
                                fontWeight: "700",
                                color: "#000",
                                textTransform: "uppercase",
                              }}
                            >
                              'OTP
                            </span>{" "}
                            reçu du passager et commencez le trajet.
                          </p>
                        </div>
                      }
                      step5={"Étape 5"}
                      step5Img={"/assets/driver_step5_img.svg"}
                      step5Text={
                        <div className="text_wrapper_modal">
                          <p style={{ paddingBottom: "10px" }}>
                            le paiement sera effectué par le client après la
                            course !
                          </p>
                        </div>
                      }
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      ) : (
        <div className="smartphone-wrapper">
          <div className="smartphone">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src={iframeURL}
                frameBorder="0"
                allowFullScreen
                scrolling={!OSC ? "no" : "yes"}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseExpFa;
