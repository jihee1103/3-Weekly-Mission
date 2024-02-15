import { useContext } from "react";
import { SharedPageStateContext } from "../../page/SharedPage";
import defaultImage from "./default.png";
import styled from "styled-components";

const SharedPageCardList = () => {
  const { folderData } = useContext(SharedPageStateContext);

  return (
    <>
      {folderData &&
        folderData.folder.links &&
        folderData.folder.links.map((folder) => (
          <CardContainer key={folder.id}>
            <CardWrapper>
              <CardImageWrapper>
                {folder.imageSource ? (
                  <img src={folder.imageSource} alt="링크 대표 이미지" />
                ) : (
                  <img src={defaultImage} alt="링크 기본 이미지" />
                )}
              </CardImageWrapper>
              <CardContent>
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
export default SharedPageCardList;

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
