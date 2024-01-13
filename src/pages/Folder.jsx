import Profile from "../components/Profile";
import Main from "../components/Main";
// import getData from "../api/getData";

const Folder = function () {
  //   const [cardData, setCardData] = useState([]);

  //   useEffect(() => {
  //     const data = async () => {
  //       const result = await getData("/users/1/folders");
  //       setCardData(result.folder.links);
  //     };

  //     data();
  //   }, []);
  return (
    <>
      <Profile />
      <Main />
    </>
  );
};

export default Folder;
