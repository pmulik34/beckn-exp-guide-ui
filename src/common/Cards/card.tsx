import React from "react";
import "./Cards.css";

interface cardContentPropsModal {
  mainIconUrl?: any;
  MainTitle?: string;
  mainIconUrlInBlack?: any;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<cardContentPropsModal> = ({
  mainIconUrl,
  MainTitle,
  mainIconUrlInBlack,
  className,
}: cardContentPropsModal) => {
  return (
    <div className={`cards ${className}`}>
      <div className="cards-inner">
        <div className="cards-img">
          <div className="image-url-containers">
            <img src={mainIconUrl} alt={"BecknLogoIcon"} />
            <img
              className="hover-icon"
              src={mainIconUrlInBlack}
              alt={"BecknLogoIcon"}
            />
          </div>
          <div className="cards-title">
            <div className="mains-title">{MainTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
