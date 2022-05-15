import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../css/mainScreen.css";
import "../css/header.css";
import "../css/font.css";
import GoldRiver from "../images/goldriver.png";
import { setRouteState } from "../features/checkRouteSlice";

function MainScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRouteState(false));
  }, []);

  const goList = () => {
    dispatch(setRouteState(true));
    navigate("/list");
  };

  return (
    <div className="mainScreenContainer">
      <div className="mainScreenImage">
        <img src={GoldRiver} />
      </div>
      <div className="mainScreenText">
        <div className="mainScreenTitle">Good Bye, My Dear</div>
        <div className="mainScreenQuote">
          <blockquote>
            <div>꿈 꾸세요.</div>
            <div>여러분들 다 하실 수 있습니다.</div>
            <div>여러분의 가치를 항상 높여 잡아주셨으면 좋겠어요.</div>
            <div className="quoteFooter">2022.01.28 깜짝 라이브에서</div>
          </blockquote>
        </div>
        <div className="mainScreenDesc">
          <div>우리에게 늘 꿈을 꾸게 해준 당신</div>
          <div>감사합니다</div>
        </div>
        <div>&nbsp;</div>
        <div className="mainScreenBtn">
          <button onClick={() => goList()}>편지 읽으러 가기</button>
        </div>
        <div>&nbsp;</div>
        <div className="creditText">Made by 김뷰엘 with ❤️</div>
      </div>
    </div>
  );
}

export default MainScreen;
