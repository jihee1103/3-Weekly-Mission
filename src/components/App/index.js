import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import "./style.css";

const App = ({ user }) => {
  return (
    <>
      <Nav className="App-Nav" user={user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
