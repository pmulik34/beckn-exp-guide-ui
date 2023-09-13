import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EcCard from "../components/cards/EcCard";
import Header from "../components/header/Header";
import ProgressBar from "../components/progressBar/ProgressBar";
import { cardsData } from "../utility/selectExpCardData";
import "./SelectExperience.css";

function SelectExperience() {
  const navigate = useNavigate();
  const [isInProgess, setIsInProgress] = useState(false);

  const handleNavigate = (url: any) => {
    navigate({
      // pathname: "/progress",
      search: `?url=${url}`,
    });
    setIsInProgress(true);
  };

  return (
    <>
      {isInProgess ? (
        <ProgressBar />
      ) : (
        <>
          <Header
            headerImg={"/assets/beckn_lg.svg"}
            headerHomeIcon={"/assets/home.svg"}
            handleHomeIcon={() => navigate("/")}
          />
          <div className="select_experience_container">
            {cardsData.map((item, ind) => (
              <EcCard
                key={ind}
                cardImage={item.cardImg}
                cardText1={item.cardText1}
                cardText2={item.cardText2}
                handleNevigate={() => {
                  handleNavigate(item.cardUrl);
                }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default SelectExperience;
