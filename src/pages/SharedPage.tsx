import React, { useEffect, useState } from "react";
import "./SharedPage.css";
import imageData from "../assets/imageData";
import CardList from "../components/CardList/CardList";
import { getFolderData, getFolderList, getOwner } from "../apis/api";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import useFetchData from "../hooks/useFetchData";
import { useSearchParams } from "react-router-dom";
import { UserId } from "../types/userType";
import { StringUndefined } from "../types/types";
import {
  CardItem,
  FolderData,
  FolderOwnerData,
  OwnerData,
} from "../types/dataTypes";
import { VoidFunc } from "../types/functionType";

export default function SharedPage() {
  const [searchParams] = useSearchParams();
  const userId: UserId = searchParams.get("user");
  const folderId: StringUndefined | null = searchParams.get("folder");
  const cardListItem: CardItem[] | null =
    useFetchData(() => getFolderData(folderId, userId!)).data || null;
  const folderData: FolderData[] | null =
    useFetchData(() => getFolderList(userId!)).data || [];

  const ownerData: OwnerData[] =
    useFetchData(() => getOwner(userId!)).data || [];
  const [folderName, setFolderName] = useState<string>("");
  const [folderOwner, setFolderOwner] = useState<FolderOwnerData | null>(null);

  const handleHeaderData: VoidFunc = () => {
    if (!folderData || !ownerData) {
      return;
    }
    const folder: FolderData | undefined = folderData?.find(
      (data: FolderData) => data.id === +folderId!
    );
    if (!folder) {
      return;
    }
    setFolderName(folder.name);
    const { name, imageSource }: FolderOwnerData = ownerData[0];
    setFolderOwner({ name, imageSource });
  };

  useEffect(() => {
    handleHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderData, ownerData]);

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
interface Props {
  folderOwner: FolderOwnerData;
  folderName: string;
}
function SharedHeader({ folderOwner, folderName }: Props) {
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
