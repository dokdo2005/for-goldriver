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
          <div>떠나는 순간까지도 꿈을 꾸게 해준 당신,</div>
          <div>잊지 않겠습니다</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
