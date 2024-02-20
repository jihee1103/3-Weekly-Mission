import AddLinkArea from "@/src/components/AddLinkArea/AddLinkArea";
import ContentsArea from "@/src/components/ContentsArea/ContentsArea";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import styles from "@/styles/folder.module.css";
import Image from "next/image";
import FAB from "@/public/assets/FAB.png";

const Folder = () => {
  return (
    <div className={styles.folder}>
      <Header></Header>
      <AddLinkArea />
      <ContentsArea />
      <Footer />
      <Image
        className={styles.mobileAddButton}
        src={FAB}
        alt="반응형 모바일 추가버튼"
      />
    </div>
  );
};

export default Folder;
