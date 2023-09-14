import React, { FC } from "react";
import "./Header.css";

interface HeaderProps {
  headerImg: string;
  headerHomeIcon: string;
  handleHomeIcon?: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="header_wrapper">
      <div className="header_img">
        <img src={props.headerImg} />
      </div>
      <div className="header_home_icon" onClick={props.handleHomeIcon}>
        <img src={props.headerHomeIcon} />
      </div>
    </div>
  );
};

export default Header;
