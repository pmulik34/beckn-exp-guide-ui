import React, { FC } from "react";
import "./EcCard.css";

interface CardProps {
  cardImage: string;
  cardText1: string;
  cardText2: string;
  handleNevigate: () => void;
}

const EcCard: FC<CardProps> = (props) => {
  return (
    <div className="card_container" onClick={props.handleNevigate}>
      <div className="card_innr">
        <div className="card_with_image">
          <img src={props.cardImage} alt={"DSEP-img"} />
        </div>
        <p className="card_text">{props.cardText1}</p>
        <p className="card_text">{props.cardText2}</p>
      </div>
    </div>
  );
};

export default EcCard;
