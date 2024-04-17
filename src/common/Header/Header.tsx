import React from "react";
import { Link } from "react-router-dom"; 
import "./Header.css";

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
        {/* Add Link to the logo */}
        <Link to="/select-experience">
          <img src={logoSrc} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="heading">
        <div className="heading">{headingLine1}</div>
        <div className="heading">{headingLine2}</div>
      </div>
      <div className="header-right">
        <img src="/assets/jica.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
