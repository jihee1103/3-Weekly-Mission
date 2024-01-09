import AddLinkArea from "../../components/AddLinkArea/AddLinkArea";
import ContentsArea from "../../components/ContentsArea/ContentsArea";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Folder.css";

const Folder = () => {
  return (
    <div className="Folder">
      <Header />
      <AddLinkArea />
      <ContentsArea />
      <Footer />
      <img
        className="mobileAddButton"
        src={process.env.PUBLIC_URL + `/assets/FAB.png`}
        alt="반응형 모바일 추가버튼"
      />
    </div>
  );
};

export default Folder;
