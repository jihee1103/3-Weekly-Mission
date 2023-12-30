import "./App.css";
import Header from "./components/Header/Header";
import Folder from "./components/Folder/Folder";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState({});
    const [linkData, setLinkData] = useState({});

    useEffect(() => {
        try {
            loadUserData().then((userData) => {
                setUserData({ ...userData });
                setLogin(true);
            });
        } catch (error) {
            console.error(error);
        }
    }, []);

    const loadUserData = async () => {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
        if (response.ok) {
            const body = await response.json();
            return body;
        } else {
            throw new Error("유저 정보를 불러오지 못함");
        }
    };

    useEffect(() => {
        try {
            loadCardData().then((data) => {
                setLinkData(() => data.folder);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const loadCardData = async () => {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        if (response.ok) {
            const body = await response.json();
            return body;
        } else {
            throw new Error("카드 정보를 불러오지 못함");
        }
    };

    return (
        <div className="App">
            <Header
                login={login}
                setLogin={setLogin}
                userData={userData}
                setUserData={setUserData}
                loadUserData={loadUserData}
            />
            <Folder linkData={linkData} />
            <CardList linkData={linkData} />
            <Footer />
        </div>
    );
}

export default App;
