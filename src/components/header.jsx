import React from "react";
import "../css/header.css";
import "../css/font.css";
import GoldRiver from "../images/goldriver.png";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerImage">
        <img src={GoldRiver} />
      </div>
      <div className="headerText">
        <div className="headerTitle">Good Bye, My Dear</div>
        <div className="headerDesc">
          <div>미처 담지 못한 이야기들</div>
        </div>
        <div className="creditText">Made by 김뷰엘 with ❤️</div>
      </div>
    </div>
  );
}

export default Header;
