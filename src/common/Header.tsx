import React from "react";
// import "../;

interface HeaderProps {
  logoSrc: string;
  headingLine1: string;
  headingLine2: string;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  headingLine1,
  headingLine2,
}) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logoSrc} alt="Logo" className="logo" />
      </div>
      <div className="heading">
        <div className="heading">{headingLine1}</div>
        <div className="heading">{headingLine2}</div>
      </div>
      <div className="header-left">
        <img src={logoSrc} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default Header;
