import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import Link from "next/link";
import Footer from "../../components/common/Footer";

const cx = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <header className={cx("header")}>
        <div className={cx("header-content")}>
          <Link href="/">
            <img src="/images/logo.png" alt="로고" />
          </Link>
          <Link href="/signin">로그인</Link>
        </div>
      </header>
      <div className={cx("title-background")}>
        <section className={cx("title")}>
          <h1 className={cx("mainTitle-subject")}>
            <span>세상의 모든 정보</span>를 <br />
            쉽게 저장하고
            <br id="h1br" />
            관리해 보세요
          </h1>
          <div className={cx("link-plus")}>
            <Link href="/signup">링크 추가하기</Link>
          </div>
          <div className={cx("title-img")}>
            <img src="/images/title.png" alt="정보저장 사진" />
          </div>
        </section>
      </div>
      <section className={cx("content")}>
        <div className={cx("content-text")}>
          <h2 className={cx("title-subject")}>
            <span className={cx("span-link")}>원하는 링크</span>를 <br />
            저장하세요
          </h2>
          <span className={cx("decription")}>
            나중에 읽고 싶은글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
            모든 것을 한 공간에 저장하세요.
          </span>
        </div>
        <div className={cx("content-img")}>
          <img src="/images/link-img.png" alt="링크 연결 사진" />
        </div>
      </section>
      <section className={cx("content")}>
        <div className={cx("content-img")}>
          <img
            className={cx("login-img")}
            src="/images/folder-img.png"
            alt="폴더관리사진"
          />
        </div>
        <div className={cx("content-text")}>
          <h2 className={cx("title-subject")}>
            링크를 폴더로 <span className={cx("span-folder")}>관리</span>하세요
          </h2>
          <span className={cx("decription")}>
            나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
          </span>
        </div>
      </section>
      <section className={cx("content")}>
        <div className={cx("content-text")}>
          <h2 className={cx("title-subject")}>
            저장한 링크를 <span className={cx("span-share")}>공유</span>해
            보세요
          </h2>
          <span className={cx("decription")}>
            여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
            쉽고 빠르게 링크를 공유해 보세요.
          </span>
        </div>
        <div className={cx("content-img")}>
          <img
            className={cx("share-img")}
            src="/images/share-img.png"
            alt="공유할폴더들"
          />
        </div>
      </section>
      <section className={cx("content")}>
        <div className={cx("content-img")}>
          <div className={cx("content-img-search")}>
            <img
              className={cx("search-img")}
              src="/images/search-img.png"
              alt="홈페이지검색사진"
            />
          </div>
        </div>
        <div className={cx("content-text")}>
          <h2 className={cx("title-subject")}>
            저장한 링크를 <span className={cx("span-search")}>검색</span>해
            보세요
          </h2>
          <span className={cx("decription")}>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </span>
        </div>
      </section>
      <Footer />;
    </>
  );
}
