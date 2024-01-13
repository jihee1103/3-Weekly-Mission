import { Cta } from "../../sharing/Cta/Cta";
import "./LinkForm.css";
import { LINK_IMAGE } from "./constant";

export const LinkForm = () => {
  return (
    <div className="Container">
      <form className="Form">
        <div className="Input-box">
          <img className="Icon" src={LINK_IMAGE} alt="링크 아이콘" />
          <input className="Input" type="text" placeholder="링크를 추가해 보세요" />
        </div>
        <Cta>
          <button className="LinkForm-button" type="submit">
            추가하기
          </button>
        </Cta>
      </form>
    </div>
  );
};
