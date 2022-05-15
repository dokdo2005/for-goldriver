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
        <div className="headerQuote">
          <blockquote>
            <div>꿈 꾸세요.</div>
            <div>여러분들 다 하실 수 있습니다.</div>
            <div>여러분의 가치를 항상 높여 잡아주셨으면 좋겠어요.</div>
            <div className="quoteFooter">2022.01.28 깜짝 라이브에서</div>
          </blockquote>
        </div>
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
