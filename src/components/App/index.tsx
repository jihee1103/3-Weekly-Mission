import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { User } from "../../types";
import "./style.css";

interface AppProps {
  user?: User;
}

const App = ({ user }: AppProps) => {
  return (
    <>
      <Nav className="App-Nav" user={user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
