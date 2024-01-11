import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

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
