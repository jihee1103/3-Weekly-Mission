import React, { useEffect, useState } from "react";
import "./SharedPage.css";
import imageData from "../assets/imageData";
import CardList from "../components/CardList/CardList";
import { getFolderData, getFolderList, getOwner } from "../apis/api";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import useFetchData from "../hooks/useFetchData";
import { useSearchParams } from "react-router-dom";
import { UserId } from "../types/userType";
import {
  CardItem,
  FolderData,
  FolderOwnerData,
  OwnerData,
} from "../types/dataTypes";
import { VoidFunc } from "../types/functionType";
import SearchResult from "../components/SearchResult/SearchResult";

export default function SharedPage() {
  const [searchParams] = useSearchParams();
  const userId: UserId = searchParams.get("user");
  const folderId: string | undefined | null = searchParams.get("folder");
  const {
    data: cardListItem,
    fetchData: setCardListItem,
    setData: filterCardList,
  }: {
    data: CardItem[] | null;
    fetchData: VoidFunc;
    setData: React.Dispatch<React.SetStateAction<CardItem[] | null>>;
  } = useFetchData(() => getFolderData(folderId, userId!));
  const folderData: FolderData[] | null =
    useFetchData(() => getFolderList(userId!)).data || [];

  const ownerData: OwnerData[] =
    useFetchData(() => getOwner(userId!)).data || [];
  const [folderName, setFolderName] = useState("");
  const [folderOwner, setFolderOwner] = useState<FolderOwnerData | null>(null);
  const [searchName, setSearchName] = useState("");
  const [isSearch, setIsSearch] = useState(false);

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
        <LinkSearchForm
          searchName={searchName}
          setSearchName={setSearchName}
          filterCardList={filterCardList}
          setIsSearch={setIsSearch}
          setCardListItem={setCardListItem}
        />
        {isSearch ? <SearchResult searchName={searchName} /> : null}
        {cardListItem ? (
          <CardList
            itemList={cardListItem}
            toggle={false}
            handleModalButtonClick={null}
          />
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
