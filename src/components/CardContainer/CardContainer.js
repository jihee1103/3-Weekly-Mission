import "./CardContainer.css";
import CardList from "../CardList/CardList";
import { useEffect, useState } from "react";
import { getAllCardData, getCardDataById } from "../../api/api";
import { useLocation } from "react-router";
import { useFolderNameContext } from "../../context/FolderNameContext";

const CardContainer = ({ cardData, allCardData }) => {
  console.log({ cardData });
  const location = useLocation();

  const [state, setState] = useState("");

  // const [cardData, setCardData] = useState({
  //   folder: { links: [{ id: "", createdAt: "", description: "", url: "" }] },
  // });

  // const [allCardData, setAllCardData] = useState({ data: [] });
  const [defaultData, setDefaultData] = useState({ data: [] });

  const { folderName } = useFolderNameContext();

  // const handleOneCardData = async () => {
  //   const card = await getFolderData();
  //   setCardData(card);
  // };

  const handleDefaultData = async () => {
    const defaultCard = await getAllCardData();
    setDefaultData(defaultCard);
  };

  // const handleIdCardData = async () => {
  //   const idCard = await getCardDataById(folderId);
  //   setIdCardData(idCard);
  //   console.log(idCard);
  //   console.log("*", folderId);
  // };

  // const handleState = () => {
  //   setState(location.pathname);
  // };

  // useEffect(() => {
  //   // handleState(); // 라우팅 -> X
  //   // handleOneCardData(); // 라우팅 /shared -> 불필요
  //   handleAllCardData(); // 라우팅 /folder -> 불필요
  //   // handleIdCardData(); // /folder 안에서 탭 클릭 했을 때,
  // }, []); // 첫 렌더링할 때 호출하고 그 이후는 호출 안함, 의존성 배열에 없으니까

  if (folderName !== "전체") {
    return (
      <div className="cardContainer">
        <CardList cardList={cardData.data}></CardList>
      </div>
    );
  } else {
    return (
      <div className="cardContainer">
        <CardList cardList={allCardData.data}></CardList>
      </div>
    );
  }

  // switch (state) {
  //   case "/shared":
  //     return (
  //       <div className="cardContainer">
  //         <CardList cardList={cardData.folder.links}></CardList>
  //       </div>
  //     );
  //   case "/folder":
  //     if (folderName === "전체") {
  //       return (
  //         <div className="cardContainer">
  //           <CardList cardList={allCardData.data}></CardList>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className="cardContainer">
  //           <CardList cardList={cardData.data}></CardList>
  //         </div>
  //       );
  //     }

  //   default:
  //     return (
  //       <div className="contentsArea">
  //         <p className="emptyMessage">저장된 링크가 없습니다</p>
  //       </div>
  //     );
  //   // return (
  //   //   <div className="cardContainer">
  //   //     <CardList cardList={allCardData.data}></CardList>
  //   //   </div>
  //   // );
  // }
};
export default CardContainer;
