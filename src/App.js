import "./App.css";
import Header from "./components/Header/Header";
import Folder from "./components/Folder/Folder";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";

function App() {
    // 로그인, 유저 데이터 관련
    const [login, setLogin] = useState(false);
    const [userData, setUserData] = useState({});

    const loadUserData = async () => {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
        if (response.ok) {
            const body = await response.json();
            return body;
        } else {
            throw new Error("사용자 정보를 불러오지 못함");
        }
    };

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

    // 폴더 관련 데이터
    const [linkData, setLinkData] = useState({});

    useEffect(() => {
        loadData().then((data) => {
            setLinkData(() => data.folder);
        });
    }, []);

    const loadData = async () => {
        const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
        const body = await response.json();
        return body;
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
