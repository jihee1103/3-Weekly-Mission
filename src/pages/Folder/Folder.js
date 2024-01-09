import AddLinkArea from "../../components/AddLinkArea/AddLinkArea";
import ContentsArea from "../../components/ContentsArea/ContentsArea";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Folder = () => {
  return (
    <div className="Folder">
      <Header />
      <AddLinkArea />
      <ContentsArea />
      <Footer />
    </div>
  );
};

export default Folder;
