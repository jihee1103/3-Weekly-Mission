import ContentsArea from "@/src/components/ContentsArea/ContentsArea";
import FolderInfo from "@/src/components/FolderInfo/FolderInfo";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

const LinkShared = () => {
  return (
    <div className="LinkShared">
      <Header />
      <FolderInfo />
      <ContentsArea />
      <Footer />
    </div>
  );
};

export default LinkShared;
