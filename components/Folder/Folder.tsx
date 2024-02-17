import { GetFolderId, ShowAll } from "@/pages/folder/[id]";
import { FolderId, LinkId } from "@/pages/folder/type";
import React, { useEffect, useState } from "react";
import useFoldLink from "./hooks/useFoldLink";
import Header from "./Header";
import Section from "./Section";
import Search from "./[Search]";
import Sorted from "./Sorted";
import * as S from "./Style";
import Image from "next/image";
import { ChangeNameModal, DeleteFolderModal, ShareModal } from "./modal/Modal";
import Card from "./Card";
import Footer from "./Footer";

export default function Folder() {
  const [sorted, setSorted] = useState<FolderId[]>([]);
  const [link, setLink] = useState<LinkId[]>([]);
  const [selectedName, setSelectedName] = useState<number>(0);
  const [linkTitle, setLinkTitle] = useState<string>("전체");
  const [modal, setModal] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const clickName: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setSelectedName(Number(e.currentTarget.value));
    setLinkTitle(e.currentTarget.title);
  };

  const getFolderId = async () => {
    try {
      const folderId: FolderId[] = await GetFolderId();
      setSorted(folderId);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const getLinkId = async () => {
    try {
      const result: LinkId[] = await ShowAll();
      setLink(result);
    } catch (error) {
      console.log(error);
    }
  };

  useFoldLink(selectedName);
  const foldLink = useFoldLink(selectedName);

  useEffect(() => {
    getFolderId();
  }, []);

  useEffect(() => {
    getLinkId();
  }, []);

  const handleShare = () => {
    setModal("ShareModal");
    setOpenModal(true);
  };

  const handleRename = () => {
    setModal("ChangeNameModal");
    setOpenModal(true);
  };

  const handleDelete = () => {
    setModal("DeleteFolderModal");
    setOpenModal(true);
  };

  const handleClose = () => {
    setModal(null);
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <Section />
      <Search />
      <Sorted data={sorted} selectedName={selectedName} clickName={clickName} />
      <S.CardTitle>
        <S.CardTitleText>{linkTitle}</S.CardTitleText>
        {linkTitle === "전체" ? (
          <></>
        ) : (
          <>
            <S.SortedEdit>
              <S.EditContent onClick={handleShare}>
                <Image
                  src={"/assets/Icons/share.svg"}
                  width={18}
                  height={18}
                  alt="share 아이콘 이미지"
                />
                <span>공유</span>
              </S.EditContent>
              <S.EditContent onClick={handleRename}>
                <Image
                  src={"/assets/Icons/pen.svg"}
                  width={18}
                  height={18}
                  alt="pen 아이콘 이미지"
                />
                <span>이름 변경</span>
              </S.EditContent>
              <S.EditContent onClick={handleDelete}>
                <Image
                  src={"/assets/Icons/delete.svg"}
                  width={18}
                  height={18}
                  alt="delete 아이콘 이미지"
                />
                <span>삭제</span>
              </S.EditContent>
            </S.SortedEdit>
            {openModal && modal === "ShareModal" && (
              <ShareModal onClose={handleClose} />
            )}
            {openModal && modal === "ChangeNameModal" && (
              <ChangeNameModal onClose={handleClose} />
            )}
            {openModal && modal === "DeleteFolderModal" && (
              <DeleteFolderModal onClose={handleClose} />
            )}
          </>
        )}
      </S.CardTitle>
      {foldLink && foldLink.length > 0 ? (
        <S.CardBox>
          {foldLink.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </S.CardBox>
      ) : (
        <S.NoData>저장된 링크가 없습니다.</S.NoData>
      )}
      <Footer />
    </>
  );
}
