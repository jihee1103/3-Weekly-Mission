import { useContext } from "react";
import { FolderPageStateContext } from "../../page/FolderPage";
import defaultImage from "./default.png";
import starIcon from "./star.svg";
import kebabIcon from "./kebab.svg";

import styled from "styled-components";

const CardList = () => {
  const { allFolderData } = useContext(FolderPageStateContext);

  return (
    <>
      {allFolderData.map((folder) => (
        <CardContainer key={folder.id}>
          <CardWrapper>
            <img src={starIcon} alt="즐겨찾기 버튼" className="startIcon" />
            <CardImageWrapper>
              {folder.image_source ? (
                <img src={folder.image_source} alt="링크 대표 이미지" />
              ) : (
                <img src={defaultImage} alt="링크브러리 로고 사진" />
              )}
            </CardImageWrapper>
            <CardContent>
              <img src={kebabIcon} alt="더보기 버튼" className="kebabIcon" />
              <Stamp>10 minutes ago</Stamp>
              <Description>{folder.description}</Description>
              <Stamp>2023. 3. 15</Stamp>
            </CardContent>
          </CardWrapper>
        </CardContainer>
      ))}
    </>
  );
};
export default CardList;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardWrapper = styled.div`
  position: relative;
  width: 340px;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;

  .startIcon {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 9999;
    width: 34px;
    height: 34px;
  }
`;

const CardImageWrapper = styled.div`
  height: 200px;
  position: relative;
  display: flex;

  img {
    background-color: #dddfff;
    width: 100%;
    height: 200px;
    transition: 0.3s;
    animation: ease-in;
    object-fit: cover;
    position: relative;
    z-index: 0;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  background-color: white;
  padding: 15px 20px;
  height: 135px;
  box-sizing: border-box;

  .kebabIcon {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 9999;
    width: 21px;
    height: 17px;
  }
`;

const Description = styled.p`
  overflow: hidden;
  font-size: 16px;

  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Stamp = styled.span`
  color: #666;
  font-size: 13px;
`;
