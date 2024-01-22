import styled from "styled-components";
import IMAGE_URL from "../../constant/imageUrl";
import { useFolderNameContext } from "../../context/FolderNameContext";

import { useEffect, useState } from "react";
import { getFolderUserData } from "../../api/api";

const { Kakao } = window;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default;

  div {
    background: white;
    padding: 32px 74px;
    border-radius: 15px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;

    .closeButton {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    div {
      gap: 8px;
      padding: 0;

      h1 {
        color: #373740;
        font-size: 2rem;
        margin: 0;
      }

      p {
        color: #9fa6b2;
        font-size: 1.4rem;
        margin: 0;
      }
    }

    .iconArea {
      display: flex;
      flex-direction: row;
      gap: 32px;
      .oneIconArea {
        display: block;
        cursor: pointer;
      }
    }
  }
`;

const ModalShareFolder = ({ handleClose }) => {
  const { folderName, folderId } = useFolderNameContext();
  const [linkUserId, setLinkUserId] = useState("");

  const KAKAO_SHARE_KEY = "aabd14c029bfccc0741b8c57bbafe148";
  const HOST_URL = "https://dynamic-figolla-7cd5e8.netlify.app/";
  const sharedLink = `${HOST_URL}/shared?user=${linkUserId}&folder=${folderId}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"; // 카카오톡 SDK
    script.async = true;

    document.body.appendChild(script);
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_SHARE_KEY);
    }

    return () => {
      Kakao.cleanup();
      document.body.removeChild(script);
      handleFolderUserData();
    };
  }, []);

  // useEffect(() => {
  //   // init 해주기 전에 clean up 을 해준다.
  //   Kakao.cleanup();
  //   // 자신의 js 키를 넣어준다.
  //   Kakao.init({ KAKAO_SHARE_KEY });
  //   // 잘 적용되면 true 를 뱉는다.
  //   console.log(Kakao.isInitialized());
  //   handleFolderUserData();
  // }, []);

  const handleCopyClipBoard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handleFolderUserData = async () => {
    const folderUserData = await getFolderUserData();
    setLinkUserId(folderUserData.data[0].id);
  };

  const shareToFacebook = (link) => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${link}`,
      "페이스북 공유하기",
      "width=600,height=800,location=no,status=no,scrollbars=yes"
    );
  };

  // const shareToKakao = (url) => {
  //   if (window.Kakao === undefined) {
  //     return;
  //   }

  // const kakao = window.Kakao;

  //   // 인증이 안되어 있는 경우, 인증한다.
  //   if (!kakao.isInitialized()) {
  //     kakao.init(KAKAO_SHARE_KEY); // 가져온 KEY를 넣는 장소, ENV로 넣던지 아니면 스트링으로 해셔도..ㅎ
  //   }

  // kakao.Share.sendDefault({
  //   objectType: "text",
  //   text: "링크 공유",
  //   link: {
  //     mobileWebUrl: url,
  //     webUrl: url,
  //   },
  // });
  // };

  const shareToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "링크 공유",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: HOST_URL,
        },
      },
      buttons: [
        {
          title: "나도 보러 가기",
          link: {
            mobileWebUrl: HOST_URL,
          },
        },
      ],
    });
  };

  return (
    <ModalContainer>
      <div>
        <div>
          <h1>폴더 공유</h1>
          <p>{folderName}</p>
        </div>

        <div className="iconArea">
          <div className="oneIconArea">
            <img
              onClick={() => {
                shareToKakao(sharedLink);
              }}
              src={`${IMAGE_URL}/assets/modal_kakao.png`}
              alt="close"
            />
            <p>카카오톡</p>
          </div>
          <div className="oneIconArea">
            <img
              onClick={() => {
                shareToFacebook(sharedLink);
              }}
              src={`${IMAGE_URL}/assets/modal_facebook.png`}
              alt="close"
            />
            <p>페이스북</p>
          </div>
          <div className="oneIconArea">
            <img
              onClick={() => {
                handleFolderUserData();
                handleCopyClipBoard(sharedLink);
              }}
              src={`${IMAGE_URL}/assets/modal_link.png`}
              alt="링크 복사 아이콘"
            />
            <p>링크 복사</p>
          </div>
        </div>

        <img
          className="closeButton"
          onClick={handleClose}
          src={`${IMAGE_URL}/assets/close.png`}
          alt="close"
        />
      </div>
    </ModalContainer>
  );
};

export default ModalShareFolder;
