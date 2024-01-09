import { useEffect, useState } from "react";
import { getUserLinks } from "../api";
import { getTimeDifference, formatCreatedAt } from "./DateUtils";
import "./FolderContentCard.css";
export default function FolderContentCard({ selectedFolder }) {
  const [items, setItems] = useState([]);
  const [isPopoverVisible, setIsPopoverVisible] = useState([]);
  const openNewWindow = (url) => {
    window.open(url, "_blank");
  };
  const handlePopoverToggle = (id) => {
    setIsPopoverVisible((prevStates) => {
      const newStates = [...prevStates];
      newStates[id] = !newStates[id];
      return newStates;
    });
  };
  useEffect(() => {
    async function handleload() {
      if (selectedFolder === "$1") {
        const { data } = await getUserLinks(1);
        setItems(data);
      } else {
        const { id } = selectedFolder;
        const { data } = await getUserLinks(1, id);
        setItems(data);
      }
    }
    handleload();
  }, [selectedFolder]);
  console.log(items);
  return (
    <ul className="cards">
      {items.length > 0 ? (
        items.map(({ created_at, url, id, description, image_source }) => {
          const timeAgo = getTimeDifference(created_at);
          const formatAt = formatCreatedAt(created_at);
          const openLink = () => openNewWindow(url);
          return (
            <li className="card" key={id}>
              <div className="card-img-div">
                <img
                  onClick={openLink}
                  className="card-img"
                  src={
                    image_source ||
                    "/imgs/01_모코코콘1_16_백색모코코_물음표.png"
                  }
                  alt="카드사진"
                />
                <img
                  className="star-img"
                  src="/imgs/star.png"
                  alt="즐겨찾기 등록"
                />
              </div>
              <div className="card-contents">
                <div className="card-time-ago-box">
                  <p className="card-time-ago">{timeAgo}</p>
                  <img
                    onClick={() => handlePopoverToggle(id)}
                    src="/imgs/kebab.png"
                    alt="파일수정"
                  />
                </div>
                {isPopoverVisible[id] && (
                  <div className="popover-box">
                    <div>삭제하기</div>
                    <div>폴더에 추가</div>
                  </div>
                )}
                <p onClick={openLink} className="card-description">
                  {description}
                </p>
                <p className="card-createdat">{formatAt}</p>
              </div>
            </li>
          );
        })
      ) : (
        <div className="no-save-link">
          저장된 링크가 없습니다
          <img src="/imgs/03_땡깡-1.gif" alt="폴더에 링크를 추가해주세요" />
        </div>
      )}
    </ul>
  );
}
