import { useState } from "react";
import LinkSearchForm from "../components/LinkSearchForm/LinkSearchForm";
import LinkAddForm from "../components/LinkAddForm/LinkAddForm";
import { getFolderList, getLinkList } from "../apis/api";
import FolderListButton from "../components/FolderListButton/FolderListButton";
import CardList from "../components/CardList/CardList";
import useFetchData from "../hooks/useFetchData";
import FolderNameLine from "../components/FolderNameLine/FolderNameLine";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import NoLinkBlock from "../components/NoLinkBlock/NoLinkBlock";
import Modal from "../components/Modal/Modal";
import styled from "styled-components";
import { NavbarUserInfo } from "./../types/userType";
import { ApiFunc, VoidFunc } from "../types/functionType";
import { CardItem, FolderData } from "../types/dataTypes";

interface Props {
  user: NavbarUserInfo | undefined;
}

export default function FolderPage({ user }: Props) {
  const {
    data: cardListItem,
    fetchData: setCardListItem,
  }: { data: CardItem[] | null; fetchData: ApiFunc } =
    useFetchData(getLinkList);
  const folderNameList: FolderData[] = useFetchData(getFolderList).data || [];
  const [folderName, setFolderName] = useState<string>("전체");
  const [isModalClicked, setIsModalClicked] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const toggleModalClick: VoidFunc = () => {
    setIsModalClicked(!isModalClicked);
  };
  const handleModalButtonClick = ({
    currentTarget,
    url,
  }: React.MouseEvent<HTMLButtonElement> & { url: string }) => {
    const targetId: string = currentTarget.id;
    setModalId(targetId!);
    setModalUrl(url);
    toggleModalClick();
  };

  return (
    <Main>
      {isModalClicked && (
        <Modal
          user={user}
          itemList={folderNameList}
          modalUrl={modalUrl}
          folderName={folderName}
          modalId={modalId}
          toggleModalClick={toggleModalClick}
        />
      )}
      <Header>
        <LinkAddForm />
      </Header>
      <LinkBoard>
        <LinkSearchForm />
        {folderNameList ? (
          <Container>
            <FolderListButton
              handleModalButtonClick={handleModalButtonClick}
              itemList={folderNameList}
              setFolderName={setFolderName}
              setCardListItem={setCardListItem}
              folderName={folderName}
            />
            <FolderNameLine
              handleModalButtonClick={handleModalButtonClick}
              folderName={folderName}
            />
            {cardListItem ? (
              <CardList
                handleModalButtonClick={handleModalButtonClick}
                itemList={cardListItem}
                toggle={true}
              />
            ) : (
              <NoLinkBlock />
            )}
          </Container>
        ) : (
          <NoLinkBlock />
        )}
        <FloatingActionButton />
      </LinkBoard>
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  z-index: 6;
`;

const Header = styled.section`
  margin: 0 auto;
  padding: 60px 0 90px;
`;

const LinkBoard = styled.section`
  background-color: #fff;
  padding: 40px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Container = styled.div`
  max-width: 106rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 1124px) {
    max-width: 70.4rem;
  }
  @media screen and (max-width: 756px) {
    max-width: 32.5rem;
  }
`;
