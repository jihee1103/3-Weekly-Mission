import React, { useEffect, useState } from "react";
import "./SharedPage.css";
import imageData from "../assets/imageData";
import CardList from "../components/CardList/CardList";
import { getFolderData, getFolderList, getOwner } from "../apis/api";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import useFetchData from "../hooks/useFetchData";
import { useSearchParams } from "react-router-dom";

export default function SharedPage() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user");
  const folderId = searchParams.get("folder");
  const { data: cardListItem } = useFetchData(() =>
    getFolderData(folderId, userId)
  );
  const { data: folderData } = useFetchData(() => getFolderList(userId));

  const { data: ownerData } = useFetchData(() => getOwner(userId));
  const [folderName, setFolderName] = useState("");
  const [folderOwner, setFolderOwner] = useState(null);

  const handleHeaderData = () => {
    if (!folderData || !ownerData) return;
    const [folder] = folderData.filter((data) => data.id === +folderId);
    setFolderName(folder.name);
    const { name, imageSource } = ownerData[0];
    console.log(imageSource);
    setFolderOwner({ name, imageSource });
  };

  useEffect(() => {
    handleHeaderData();
  }, [folderData]);

  return (
    <main>
      {folderOwner ? (
        <SharedHeader folderName={folderName} folderOwner={folderOwner} />
      ) : null}

      <div className="shared-card-board">
        <LinkSearchForm />
        {cardListItem ? (
          <CardList itemList={cardListItem} toggle={false} />
        ) : null}
      </div>
    </main>
  );
}

function SharedHeader({ folderOwner, folderName }) {
  const ownerName = folderOwner.name ? folderOwner.name : null;
  const source = folderOwner.imageSource;

  return (
    <div className="shared-header">
      {source ? (
        <img className="user-profile-img" src={source} alt="유저이미지" />
      ) : (
        <div className="codeit-img-background">
          <img src={imageData.codeitLogo} alt="코드잇 로고 이미지" />
        </div>
      )}

      <span>{ownerName}</span>
      <h2>{folderName}</h2>
    </div>
  );
}
