import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/font.css";
import "../css/messageList.css";

function CartoonEntry() {
  return (
    <div className="msgListEntry">
      <a
        href="https://www.inven.co.kr/board/lostark/4811/4966013"
        target="_blank"
      >
        <div
          className="msgImage"
          style={{
            backgroundImage: `url(${"https://for-goldriver-files.s3.ap-northeast-2.amazonaws.com/images/image-mirag.jpg"})`,
          }}
        >
          <div className="imageEnlarge">
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </div>
        </div>
      </a>
      <div className="msgWriter">Mirag</div>
      <div className="msgContent">[만화] 엠마랑 이고바바</div>
    </div>
  );
}

export default CartoonEntry;
