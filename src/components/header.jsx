import React from "react";
import "../css/header.css";
import "../css/font.css";
import GoldRiver from "../images/goldriver.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerImage">
        <img src={GoldRiver} width={"50%"} />
      </div>
      <div className="headerText">
        <div className="headerTitle">Good Bye, My Dear</div>
        <div className="headerDesc">
          <div>우리에게 늘 꿈을 꾸게 해준 당신</div>
          <div>감사합니다</div>
        </div>
        <div className="creditText">Made by 김뷰엘 with ❤️</div>
      </div>
    </div>
  );
}

export default Header;
