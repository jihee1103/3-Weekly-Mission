import Nav from "../../components/Nav";

const SharedPage = ({ user }) => {
  return (
    <>
      <Nav user={user} />
      공유 페이지입니다.
    </>
  );
};

export default SharedPage;
