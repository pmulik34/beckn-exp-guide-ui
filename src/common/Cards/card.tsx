import React, { useState } from "react";
import "./Cards.css";

interface cardContentPropsModal {
  mainIconUrl?: any;
  MainTitle?: string;
  mainIconUrlInBlack?: any;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<cardContentPropsModal> = ({
  mainIconUrl,
  mainIconUrlInBlack,
  className,
  hover
}: cardContentPropsModal) => {
  console.log("flag", hover)
  return (
    <div className="image-url-containers">
      <img className="firstImage"
        src={mainIconUrl}
        alt={"BecknLogoIcon"}
      />
      <img className="secondImage"
        src={mainIconUrlInBlack}
        alt={"BecknLogoIcon"}
      />
    </div>
  );
};
export default Card;
