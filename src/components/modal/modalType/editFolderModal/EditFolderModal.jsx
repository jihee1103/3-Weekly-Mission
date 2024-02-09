import stylesAddFolder from "./AddFolderModal.module.css";
import stylesEditFolderName from "./EditFolderNameModal.module.css";
import stylesDeleteFolder from "./DeleteFolderModal.module.css";
import stylesShareFolder from "./ShareFolderModal.module.css";
import Button from "../../../button/Button";
import CloseButton from "../../../button/CloseButton";
import IconButton from "../../../button/IconButton";

const SHARE_URL = "http://localhost:3000/shared?user=1&folder=16";

function EditFolderModal() {
  return;
}

EditFolderModal.AddFolder = AddFolderModal;
EditFolderModal.EditFolderName = EditFolderNameModal;
EditFolderModal.DeleteFolder = DeleteFolderModal;
EditFolderModal.ShareFolder = ShareFolderModal;

function AddFolderModal({ onModalCloseClick }) {
  return (
    <div className={stylesAddFolder.modal}>
      <CloseButton
        className={stylesAddFolder.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesAddFolder.title}>폴더 추가</h2>
      <input className={stylesAddFolder.input} placeholder="내용 입력" />
      <Button className={stylesAddFolder.addButton}>추가하기</Button>
    </div>
  );
}

function EditFolderNameModal({ onModalCloseClick }) {
  return (
    <div className={stylesEditFolderName.modal}>
      <CloseButton
        className={stylesEditFolderName.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesEditFolderName.title}>폴더 이름 변경</h2>
      <input className={stylesEditFolderName.input} placeholder="내용 입력" />
      <Button className={stylesEditFolderName.addButton}>변경하기</Button>
    </div>
  );
}

function DeleteFolderModal({ onModalCloseClick }) {
  return (
    <div className={stylesDeleteFolder.modal}>
      <CloseButton
        className={stylesDeleteFolder.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesDeleteFolder.title}>폴더 삭제</h2>
      <h3 className={stylesDeleteFolder.folderName}>폴더명</h3>
      <Button className={stylesDeleteFolder.deleteButton}>삭제하기</Button>
    </div>
  );
}

function ShareFolderModal({ onModalCloseClick }) {
  return (
    <div className={stylesShareFolder.modal}>
      <CloseButton
        className={stylesShareFolder.closeButton}
        onModalCloseClick={onModalCloseClick}
      />
      <h2 className={stylesShareFolder.title}>폴더 공유</h2>
      <h3 className={stylesShareFolder.folderName}>폴더명</h3>
      <div className={stylesShareFolder.shareButton}>
        <KakaoButton />
        <FacebookButton />
        <CopyLinkButton />
      </div>
    </div>
  );
}

function KakaoButton() {
  const { Kakao } = window;

  const shareToKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "폴더 이름",
        imageUrl:
          "https://i.namu.wiki/i/8AS4OSvzlQ_Tw8Jvy4g7gQb0w0JTQRf4lhvsqUYUqOcTTmeMFVBHCL72kO6PR2NDilN2i2wuZidniZgvLs0w3o8r8Xt8RgOgh-L7x1HoPju69RSHFg9LAOuyScKgcTasezzJm8g9JYUp-Vy5WHpI_Q.webp",
        link: {
          webUrl: SHARE_URL,
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: SHARE_URL,
          },
        },
      ],
    });
  };

  return (
    <IconButton onClick={shareToKakao}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="42" height="42" rx="21" fill="#FEE500" />
        <g clip-path="url(#clip0_8874_9321)">
          <path
            opacity="0.902"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 12.9443C16.29 12.9443 12 16.7303 12 19.9333C12 22.3333 13.558 24.4503 15.931 25.7083L14.933 29.3743C14.844 29.6993 15.213 29.9573 15.496 29.7703L19.873 26.8653C20.242 26.9013 20.618 26.9223 21 26.9223C25.97 26.9223 30 23.7933 30 19.9333C30 16.7303 25.97 12.9443 21 12.9443Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_8874_9321">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(12 12)"
            />
          </clipPath>
        </defs>
      </svg>
      <h3>카카오톡</h3>
    </IconButton>
  );
}

function FacebookButton() {
  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(SHARE_URL);
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  return (
    <IconButton onClick={shareToFacebook}>
      <>
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="42" height="42" rx="21" fill="#1877F2" />
          <g clip-path="url(#clip0_8874_9326)">
            <path
              d="M30 21C30 16.032 25.968 12 21 12C16.032 12 12 16.032 12 21C12 25.356 15.096 28.983 19.2 29.82V23.7H17.4V21H19.2V18.75C19.2 17.013 20.613 15.6 22.35 15.6H24.6V18.3H22.8C22.305 18.3 21.9 18.705 21.9 19.2V21H24.6V23.7H21.9V29.955C26.445 29.505 30 25.671 30 21Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_8874_9326">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(12 12)"
              />
            </clipPath>
          </defs>
        </svg>
        <h3>페이스북</h3>
      </>
    </IconButton>
  );
}

function CopyLinkButton() {
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IconButton onClick={copyToClipBoard}>
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="42"
          height="42"
          rx="21"
          fill="#9D9D9D"
          fill-opacity="0.04"
        />
        <g clip-path="url(#clip0_8874_9331)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.5815 14.063C22.4302 13.2433 23.5669 12.7897 24.7468 12.8C25.9267 12.8102 27.0554 13.2835 27.8897 14.1178C28.724 14.9522 29.1973 16.0808 29.2075 17.2607C29.2178 18.4406 28.7642 19.5773 27.9445 20.426L27.9354 20.4353L25.6855 22.6852C25.2293 23.1416 24.6803 23.4945 24.0757 23.72C23.4711 23.9455 22.8251 24.0384 22.1815 23.9923C21.5378 23.9462 20.9116 23.7622 20.3454 23.4529C19.7791 23.1435 19.286 22.7159 18.8995 22.1992C18.6514 21.8675 18.7191 21.3975 19.0508 21.1494C19.3825 20.9013 19.8525 20.9691 20.1006 21.3007C20.3583 21.6452 20.687 21.9303 21.0645 22.1365C21.4421 22.3428 21.8595 22.4654 22.2886 22.4961C22.7177 22.5269 23.1484 22.465 23.5514 22.3146C23.9545 22.1643 24.3205 21.929 24.6246 21.6247L24.6247 21.6246L26.8699 19.3795C27.4136 18.8142 27.7144 18.0583 27.7076 17.2737C27.7008 16.4871 27.3853 15.7347 26.829 15.1785C26.2728 14.6223 25.5204 14.3068 24.7338 14.2999C23.9489 14.2931 23.1927 14.5942 22.6273 15.1384L21.3413 16.4168C21.0476 16.7089 20.5727 16.7075 20.2807 16.4138C19.9886 16.12 19.99 15.6451 20.2838 15.3531L21.5738 14.0706L21.5815 14.063Z"
            fill="#6D6AFE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9243 18.2799C18.5289 18.0544 19.1749 17.9615 19.8185 18.0076C20.4621 18.0537 21.0883 18.2377 21.6546 18.547C22.2209 18.8564 22.714 19.284 23.1005 19.8007C23.3486 20.1324 23.2808 20.6024 22.9491 20.8505C22.6175 21.0986 22.1474 21.0308 21.8993 20.6992C21.6417 20.3547 21.3129 20.0696 20.9354 19.8634C20.5579 19.6571 20.1404 19.5345 19.7113 19.5038C19.2823 19.473 18.8516 19.5349 18.4485 19.6853C18.0455 19.8356 17.6795 20.0709 17.3753 20.3752L15.1301 22.6204C14.5863 23.1857 14.2855 23.9416 14.2923 24.7262C14.2992 25.5128 14.6147 26.2652 15.1709 26.8214C15.7271 27.3776 16.4796 27.6931 17.2662 27.7C18.0507 27.7068 18.8066 27.406 19.3719 26.8622L20.6496 25.5846C20.9425 25.2917 21.4173 25.2917 21.7102 25.5846C22.0031 25.8775 22.0031 26.3524 21.7102 26.6453L20.4277 27.9278L20.4184 27.9369C19.5697 28.7566 18.433 29.2102 17.2531 29.1999C16.0732 29.1897 14.9446 28.7164 14.1103 27.8821C13.2759 27.0477 12.8027 25.9191 12.7924 24.7392C12.7822 23.5593 13.2357 22.4226 14.0554 21.5739L14.0646 21.5646L16.3145 19.3147C16.3144 19.3147 16.3145 19.3147 16.3145 19.3147C16.7707 18.8584 17.3197 18.5054 17.9243 18.2799Z"
            fill="#6D6AFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_8874_9331">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(12 12)"
            />
          </clipPath>
        </defs>
      </svg>
      <h3>링크 복사</h3>
    </IconButton>
  );
}

export default EditFolderModal;
